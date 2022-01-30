import * as React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-900 block top-0 left-0 right-0 py-2">
      <div className="container flex flex-row justify-between mx-auto">
        <div className="text-rose-300">
          <h1>BRAND</h1>
        </div>
        <div className="">
          <ul className="flex flex-row justify-center gap-6">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="about">
              <li>About</li>
            </Link>
            <Link to="blog">
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="extralinks">
          <button className="btn">+</button>
          <button className="btn">o</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
