import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / pageHeight) * 100;
      setIsScrolled(scrollPercent > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? "bg-green shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-20">
        {/* Logo */}
        <h1 className="flex text-2xl text-white font-semibold items-center">
          <FaAngleLeft size={25} />
          <span className="mx-2">Code.Hariom</span>
          <FaAngleRight size={25} />
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex font-semibold text-2xl text-white space-x-14">
          <li>Home</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact Us</li>
        </ul>

        {/* Desktop Button */}
        <a
          href="./public/Hariom-Resume.pdf"
          download
          className="hidden md:block py-2 bg-white text-xl tracking-wide rounded-md text-black px-10"
        >
          Resume
        </a>

        {/* Hamburger Menu */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={60} color="white" /> : <HiMenu size={30} color="white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed top-0 left-0 w-full h-full bg-green text-white flex flex-col  px-10 justify-center space-y-8 text-3xl font-semibold transition-all duration-300"
        >
          <ul className="space-y-6 text-left">
            <li onClick={() => setIsOpen(false)}>Home</li>
            <li onClick={() => setIsOpen(false)}>About Me</li>
            <li onClick={() => setIsOpen(false)}>Skills</li>
            <li onClick={() => setIsOpen(false)}>Project</li>
            <li onClick={() => setIsOpen(false)}>Contact Us</li>
          </ul>
          <a
            href="./public/Hariom-Resume.pdf"
            download
            className="mt-5 bg-white text-green px-8 py-3 rounded-md text-xl"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
