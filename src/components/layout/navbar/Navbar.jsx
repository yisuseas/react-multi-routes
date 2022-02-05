import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavToggler from "./NavToggler";
import NavLink from "./NavLink";
import NavBtn from "./NavBtn";

import Logo from "../../elements/Logo";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <nav
      className={
        "fixed top-0 z-[100] w-full " +
        "font-enfasis text-2xl lg:text-lg text-white bg-slate-900 shadow-lg "
      }
    >
      <div
        className={
          "mx-auto container-res py-6 lg:py-4 " +
          "grid grid-flow-row grid-cols-12 gap-0 "
        }
      >
        {/* Nav Toggle */}
        <div className="flex lg:hidden order-first col-span-1 items-center ">
          <NavToggler onClick={() => toggleNavbar()} open={open} />
        </div>
        {/* Brand */}
        <div
          className={
            "order-1 col-span-10 lg:col-span-3 " +
            "flex items-center justify-center lg:justify-start "
          }
        >
          <Link to="/" onClick={() => handleClick()}>
            <div className="flex flex-row">
              <div className="h-7 lg:h-6 inline-block mr-2 my-auto">
                <Logo />
              </div>
              <h1 className="">MON-MASSAGE</h1>
            </div>
          </Link>
        </div>
        {/* NavLinks */}
        <div className="overflow-hidden order-3 lg:order-2 col-span-12 lg:col-span-6 ">
          <ul
            className={
              "mt-[-200px] open:mt-12 lg:mt-0 lg:open:mt-0 " +
              "flex flex-col lg:flex-row gap-6 " +
              "justify-start lg:justify-center items-center text-center " +
              "transition-all lg:transition-none "
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
            "order-2 lg:order-3 col-span-1 lg:col-span-3 flex flex-row " +
            "items-center justify-end gap-6 "
          }
        >
          <NavBtn extraClass="hidden lg:block ">
            <i className="fas fa-search"></i>
          </NavBtn>
          <NavBtn>
            <i className="fas fa-shopping-cart "></i>
          </NavBtn>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
