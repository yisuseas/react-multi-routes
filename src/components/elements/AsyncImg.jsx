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
    return (
      <img
        // className="w-full h-full"
        src={props.src}
        alt={props.alt}
      />
    );
  } else {
    const c = props.color ? props.color : "gray";
    const s = {
      backgroundColor: c,
    };

    return <div className="h-full w-full animate-pulse" style={s}></div>;
  }
}

export default AsyncImg;
