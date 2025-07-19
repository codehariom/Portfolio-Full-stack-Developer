import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="px-5 py-5 min-w-max bg-black">
      <div className=" place-content-center-center">
        <nav className=" items-center justify-between flex">
          <h1 className=" flex text-2xl  text-white font-semibold items-center">
            <span>
              <FaAngleLeft size={25} />
            </span>
            Code.Hariom
            <span>
              <FaAngleRight size={25} />
            </span>
          </h1>

          <ul className=" font-semibold text-2xl text-white flex space-x-14">
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact Us</li>
          </ul>

          <button className=" py-2 bg-white text-xl  tracking-wide rounded-md text-black px-10">
            <a href="./public/Hariom-Resume.pdf" download>
              Hire Me
            </a>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
