import React from "react";

function NavToggler(props) {
  const { open, onClick } = props;

  const icon = open ? (
    <i className="fas fa-times"></i>
  ) : (
    <i className="fas fa-bars"></i>
  );

  return (
    <div className="flex md:hidden order-first col-span-1 items-center">
      <button
        id="navbar-trigger"
        onClick={onClick}
        className={"navbar-icon transition-colors text-white"}
      >
        {icon}
      </button>
    </div>
  );
}

export default NavToggler;
