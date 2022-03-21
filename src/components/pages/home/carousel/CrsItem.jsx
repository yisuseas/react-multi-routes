import React, { useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";

/**
 * ### Carousel Item Component
 */
function CrsItem({ label, text, children, xPos }) {
  const prevXPos = useRef(xPos);
  const isActive = Math.abs(prevXPos.current - xPos) !== 200;

  useEffect(() => {
    prevXPos.current = xPos;
  }, [xPos]);

  const s = useSpring({
    loop: false,
    config: { ...config.slow },
    from: { left: `${prevXPos.current}%` },
    to: { left: `${xPos}%` },
  });

  return (
    <animated.div
      className={
        (isActive ? "block " : "hidden ") +
        "relative float-left w-full box-border " +
        "h-[500px] mr-[-100%]"
      }
      style={s}
    >
      {children ? (
        <div className="absolute flex top-0 bottom-0 left-0 right-0">
          {children}
        </div>
      ) : null}
      {label || text ? (
        <div // Label container
          className={
            "block text-center text-white " +
            "absolute left-[15%] right-[15%] bottom-[150px] py-2 "
          }
        >
          {label ? ( // Display only if there's label
            <h5 className="text-3xl font-enfasis capitalize">{label}</h5>
          ) : null}
          {text ? ( // Display only if there's text
            <p className="">{text}</p>
          ) : null}
        </div>
      ) : null}
    </animated.div>
  );
}

export default CrsItem;
