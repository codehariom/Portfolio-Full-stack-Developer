import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / pageHeight) * 100;

      if (scrollPercent > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed px-20 py-4 top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? "bg-green shadow-xl" : "bg-transparent"
      }`}
    >
      <div className=" place-content-center-center ">
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

          <ul className=" font-semibold text-2xl text-white flex cursor-pointer space-x-14">
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact Us</li>
          </ul>

          <button className=" py-2 bg-white text-xl  tracking-wide  rounded-md text-black px-10">
            <a href="./public/Hariom-Resume.pdf" download>
              Resume
            </a>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
