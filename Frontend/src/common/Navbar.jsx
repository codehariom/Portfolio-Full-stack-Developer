import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar({ refs }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / pageHeight) * 100;
      setIsScrolled(scrollPercent > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
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
        isScrolled ? "bg-green shadow-xl" : "bg-black"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-20">
        <h1 className="flex text-xl md:text-2xl text-white font-semibold items-center">
          <FaAngleLeft size={25} />
          <span className="mx-2">Code.Hariom</span>
          <FaAngleRight size={25} />
        </h1>

        <ul className="hidden md:flex tracking-wide text-xl text-white space-x-10 cursor-pointer">
          <li onClick={() => scrollToSection(refs.homeRef)}>Home</li>
          <li onClick={() => scrollToSection(refs.aboutRef)}>About Me</li>
          <li onClick={() => scrollToSection(refs.skillsRef)}>Skills</li>
          <li onClick={() => scrollToSection(refs.toolsRef)}>Tools</li>
          <li onClick={() => scrollToSection(refs.projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(refs.contactRef)}>Contact</li>
        </ul>

        <a
          href="./public/Hariom-Resume.pdf"
          download
          className="hidden md:block py-2 bg-white text-xl tracking-wide rounded-md text-black px-10"
        >
          Resume
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX size={40} color="white" />
            ) : (
              <HiMenu size={40} color="white" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed left-0 w-70 h-full bg-green text-white flex flex-col px-10 space-y-8 text-3xl font-semibold duration-200"
        >
          <ul className="space-y-6 mt-10 text-left">
            <li onClick={() => scrollToSection(refs.homeRef)}>Home</li>
            <li onClick={() => scrollToSection(refs.aboutRef)}>About Me</li>
            <li onClick={() => scrollToSection(refs.skillsRef)}>Skills</li>
            <li onClick={() => scrollToSection(refs.projectsRef)}>Projects</li>
            <li onClick={() => scrollToSection(refs.contactRef)}>Contact</li>
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
