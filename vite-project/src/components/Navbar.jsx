import { useState } from "react";
import { menu, close, logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-center items-center navbar ">
      <img src={logo} alt="handbook" className=" w-[128px] h-[32px] " />
      <ul className=" list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins 
            font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-[white] `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="  sm:hidden flex flex-1 justify-end items-center">
        <img
          src={Toggle ? close : menu}
          alt="nemu"
          className=" w-[28px] h-[28px] object-"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* these are conditional expression learn it in geekforgeeks */}

        <div
          className={`${Toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className=" list-none flex  flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins 
            font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-5"
                  } text-[white] `}
              >
                <a href={`#${nav.id}`} >{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
