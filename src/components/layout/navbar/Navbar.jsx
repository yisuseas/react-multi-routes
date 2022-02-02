import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavToggler from "./NavToggler";
import NavLink from "./NavLink";
import NavBtn from "./NavBtn";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full font-display text-3xl md:text-xl text-white bg-black">
      <div
        className={
          "mx-auto container-res py-6 md:py-4 " +
          "grid grid-flow-row grid-cols-6 gap-0 "
        }
      >
        <NavToggler onClick={() => toggleNavbar()} open={open} />
        {/* Brand */}
        <div
          className={
            "order-1 col-span-4 md:col-span-1 " +
            "flex items-center justify-center md:justify-start"
          }
        >
          <Link to="/" onClick={() => handleClick()}>
            <h1 className="text-gold-400 font-black underline">BRAND</h1>
          </Link>
        </div>
        {/* NavLinks */}
        <div className="overflow-hidden order-3 md:order-2 col-span-6 md:col-span-4 ">
          <ul
            className={
              "mt-[-200px] open:mt-12 md:mt-0 " +
              "flex flex-col md:flex-row gap-6 " +
              "justify-start md:justify-center items-center text-center " +
              "transition-all md:transition-none "
            }
            open={open}
          >
            <NavLink onClick={() => handleClick()} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => handleClick()} to="about">
              About
            </NavLink>
            <NavLink onClick={() => handleClick()} to="blog">
              Blog
            </NavLink>
          </ul>
        </div>
        {/* NavBtns */}
        <div
          className={
            "order-2 md:order-3 col-span-1 flex flex-row " +
            "items-center justify-end gap-6 text-gold-400"
          }
        >
          <NavBtn extraClass="hidden md:block">
            <i className="fas fa-search"></i>
          </NavBtn>
          <NavBtn>
            <i className="fas fa-shopping-cart"></i>
          </NavBtn>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
