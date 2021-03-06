import React from "react";

function Cart() {
  return (
    <svg
      width="30"
      height="30"
      version="1.1"
      viewBox="0 0 7.9375 7.9375"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="m0.79375 1.5875c0.52917 0 0.52917 0 0.79375 1.3229l0.26458 1.3229c0.26458 1.3229 0.26458 1.3229 2.1167 1.3229h2.1167"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".52917"
        />
        <path
          d="m6.6146 2.1167c0.52917 0 0.52917 0 0 1.0583-0.52917 1.0583-0.79375 1.0583-1.3229 1.0583h-3.4396"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".52917"
        />
        <circle cx="5.8208" cy="6.8792" r=".52917" fill="#fff" />
        <circle cx="2.6458" cy="6.8792" r=".52917" fill="#fff" />
      </g>
    </svg>
  );
}

function CartBtn(props) {
  const { total, onClick } = props;
  return (
    <button onClick={onClick} className="relative ">
      <Cart />
      <span
        className={
          "absolute w-[30px] h-0 right-0 -top-1 " +
          "text-center text-coral-300 " +
          (total >= 10 ? "text-xs font-semibold " : "text-sm font-bold ")
        }
      >
        {total}
      </span>
    </button>
  );
}

export default CartBtn;
