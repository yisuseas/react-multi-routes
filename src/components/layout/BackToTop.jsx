import React, { useEffect, useState } from "react";

function BackToTop() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={() => handleClick()}
      className={
        (showBtn ? "flex " : "hidden ") +
        "btn btn-leaf rounded-full hover:rounded-xl " +
        "fixed bottom-10 right-10 z-[80] " +
        "w-12 h-12 text-xl lg:w-8 lg:h-8 lg:text-base "
      }
    >
      <i className="fas fa-chevron-up mx-auto my-auto"></i>
    </button>
  );
}

export default BackToTop;
