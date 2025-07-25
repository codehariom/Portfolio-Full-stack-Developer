import React from "react";
import { ReactTyped } from "react-typed";
import img from "/public/home.png";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-green min-h-screen pt-20 w-full">
      <div className="grid grid-cols-1 place-content-center  md:grid-cols-2 h-full items-center p-6  gap-y-10">
        
        {/* Left Section */}
        <div className="text-left md:ml-40 md:mt-20 items-center space-y-10">
          <p className="text-white text-lg md:text-xl font-medium tracking-wide">Hi, I'm</p>
          
          <h1 className="text-2xl md:flex sm:text-3xl md:text-4xl text-white font-bold">
            Hariom{" "}
            <span className="block font-semibold">
              <ReactTyped
                strings={["-Full Stack Developer", "-Backend Developer"]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </span>
          </h1>
          
          <p className="text-white text-base sm:text-lg leading-relaxed max-w-md">
            I'm a passionate <span className="font-bold">MERN</span> Full-Stack Web Developer <br />
            with a knack for turning innovative ideas <br />
            into functional, scalable, and intuitive digital products.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-6 items-center mt-6">
            <a
              href="https://www.linkedin.com/in/realhariom/"
              target="_blank"
              className="flex items-center gap-2 text-white text-lg hover:underline"
            >
              <FaLinkedin size={30} /> LinkedIn
            </a>

            <a
              href="https://github.com/codehariom/"
              target="_blank"
              className="flex items-center gap-2 text-white text-lg hover:underline"
            >
              <FaGithub size={30} /> Github
            </a>
          </div>

          {/* Button */}
          <div className="mt-8">
            <a href="#contact">
              <button className="py-2 px-8 bg-white text-black text-lg rounded-md  outline-2 outline-green hover:bg-green-100 transition-all duration-300">
                Hire me Now
              </button>
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex pt-5 justify-center items-center">
          <img
            src={img}
            alt="Profile"
            className="w-70 h-70  md:w-120 md:h-120 rounded-full object-cover border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
