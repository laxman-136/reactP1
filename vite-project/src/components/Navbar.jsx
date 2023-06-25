import { useState } from "react";
import { menu, close, logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-center items-center navbar ">
      <img src={logo} alt="handbook" className=" w-[128px] h-[32px] " />
      <ul className=" list-none sm:flex hidden  justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins 
            font-normal cursor-pointer text-[16px]${index === navLinks.length - 1} text-[white] mr-10`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
