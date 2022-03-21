import React from "react";
import { useSpring, animated, config } from "react-spring";

function CrsIndicator({ isActive, handleClick }) {
  const styles = useSpring({
    loop: false,
    reverse: !isActive,
    config: { ...config.slow },
    from: { borderRadius: "4px", opacity: 0.5 },
    to: { borderRadius: "2px", opacity: 1 },
  });

  return (
    <animated.button
      onClick={() => handleClick()}
      className={
        "bg-slate-50 w-8 h-2 "
        // (isActive ? "bg-coral-400 rounded-sm" : "bg-slate-400 rounded-full")
      }
      style={{ ...styles }}
    >
      {/* <i className="fa-solid fa-circle"></i> */}
    </animated.button>
  );
}

export default CrsIndicator;
