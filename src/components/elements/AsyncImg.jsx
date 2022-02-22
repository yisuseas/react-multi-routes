import React, { useEffect, useState } from "react";

function AsyncImg(props) {
  const [loadedSrc, setLoadedSrc] = useState(null);

  useEffect(() => {
    setLoadedSrc(null);
    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src);
      };
      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.src = props.src;

      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [props.src]);

  if (loadedSrc === props.src) {
    console.log(props.className);
    return (
      <img
        // Once the image is loaded just render it.
        className={props.className}
        src={props.src}
        alt={props.alt}
      />
    );
  } else {
    const c = props.color ? props.color : "gray";
    const s = {
      backgroundColor: c,
    };

    return (
      <div
        className={
          // Display annimation and aditional classes
          "h-full w-full animate-pulse " + props.className
        }
        style={s}
      ></div>
    );
  }
}

export default AsyncImg;
