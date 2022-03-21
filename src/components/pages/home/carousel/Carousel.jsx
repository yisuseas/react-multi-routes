import React, { useState, useEffect, useRef } from "react";
import CrsIndicator from "./CrsIndicator";
import CrsItem from "./CrsItem";

const slide_count = 3;

function Carousel() {
  const [slide, setSlide] = useState(0);

  const goPrev = () => {
    handleSwitch(slide > 0 ? slide - 1 : slide_count - 1);
  };

  const goNext = () => {
    handleSwitch(slide < slide_count - 1 ? slide + 1 : 0);
  };

  const switchTo = (i) => {
    handleSwitch(i);
  };

  ///////////// Slide Positioning /////////////

  const [xPos, setXPos] = useState([0, 100, -100]);

  const handleSwitch = (to) => {
    const from = slide;

    let newXPos = xPos;

    const slidesLeft = (from + 1) % slide_count === to;
    if (slidesLeft) {
      for (let i = 0; i < xPos.length; i++) {
        newXPos[i] = xPos[i] - 100;
        if (newXPos[i] === -200) {
          newXPos[i] = 100;
        }
      }
    } else {
      for (let i = 0; i < xPos.length; i++) {
        newXPos[i] = xPos[i] + 100;
        if (newXPos[i] === 200) {
          newXPos[i] = -100;
        }
      }
    }

    setXPos(newXPos);
    setSlide(to);
  };

  ///////////// Auto-Change /////////////

  const timeoutID = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      goNext();
    }, 7000);
    timeoutID.current = id;

    return () => {
      clearTimeout(timeoutID.current);
    };
  });

  return (
    <div className={"relative box-border"}>
      {/********************************* INDICATORS *********************************/}
      <div
        className={
          "absolute left-0 right-0 bottom-0 z-10 " +
          "flex justify-center p-0 mb-4 mx-[15%] gap-4 " +
          "text-[8px]"
        }
      >
        <CrsIndicator isActive={slide === 0} handleClick={() => switchTo(0)} />
        <CrsIndicator isActive={slide === 1} handleClick={() => switchTo(1)} />
        <CrsIndicator isActive={slide === 2} handleClick={() => switchTo(2)} />
      </div>

      {/********************************* INNER CAROUSEL *********************************/}
      <div className={"relative w-full overflow-hidden"}>
        <CrsItem
          xPos={xPos[0]}
          label="First"
          text="aodfiubo iudbv oiaudbfo sdbfoiusdbfoisaudfb hsbfoi asbdfsb bdsouiabf bfdaisubf"
        >
          <div className="h-full w-full bg-rose-500"></div>
        </CrsItem>
        <CrsItem xPos={xPos[1]} label="Second">
          <div className="h-full w-full bg-blue-500"></div>
        </CrsItem>
        <CrsItem xPos={xPos[2]} label="Third">
          <div className="h-full w-full bg-emerald-500"></div>
        </CrsItem>
      </div>

      {/********************************* BUTTONS *********************************/}
      <button
        onClick={() => goPrev()}
        className={
          "absolute top-0 bottom-0 z-10 left-0 " +
          "flex items-center justify-center " +
          "w-[15%] text-zinc-200 text-center text-2xl " +
          "opacity-50 hover:opacity-100 transition-all"
        }
      >
        <i className="fa-solid fa-angle-left"></i>
        <span className="hidden">anterior</span>
      </button>
      <button
        onClick={() => goNext()}
        className={
          "absolute top-0 bottom-0 z-10 right-0 " +
          "flex items-center justify-center " +
          "w-[15%] text-zinc-200 text-center text-2xl " +
          "opacity-50 hover:opacity-100 transition-all"
        }
      >
        <i className="fa-solid fa-angle-right"></i>
        <span className="hidden">siguiente</span>
      </button>
    </div>
  );
}

export default Carousel;
