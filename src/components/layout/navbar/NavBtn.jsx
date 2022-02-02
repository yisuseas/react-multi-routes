import React from "react";

function NavBtn(props) {
  const { children, extraClass } = props;

  return <button className={"" + extraClass}>{children}</button>;
}

export default NavBtn;
