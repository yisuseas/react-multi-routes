import React from "react";
import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <Link to={props.to} onClick={props.onClick} className="w-full md:w-auto">
      <li className="">{props.children}</li>
    </Link>
  );
}

export default NavLink;
