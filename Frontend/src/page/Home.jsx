import React from "react";
import { ReactTyped } from "react-typed";
import img from "/public/home.png";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-90% to-green  ">
      <div className=" grid grid-cols-1  md:grid-cols-2   h-screen justify-between items-center place-items-center">
        <div className=" text-left space-x-20 ">
          <p className=" text-white  text-xl mb-5 font-medium tracking-wider"> Hi, I'm </p>
          <h1 className="text-2xl mb-7 text-white md:text-4xl">
            Hariom-
            <span className=" font-semibold max-w-fit">
              <ReactTyped
                strings={["-Full Stack Developer ", "-Backend Developer"]}
                typeSpeed={200}
                backSpeed={200}
                loop
                className="text-white "
              />
            </span>
          </h1>
          <p className=" text-white text-xl tracking-wide leading-8">I'm a passionate Full-Stack Web Developer <br/> with a knack for turning innovative ideas <br/> into functional, scalable, and intuitive digital products.</p>
          <div className=" flex mt-15 space-x-15" >
            <div className=" flex items-center gap-5  ">
                <FaLinkedin size={35} color="white"/><a href= "https://www.linkedin.com/in/realhariom/ " target="_blank" className="text-white text-xl  tracking-[2.5px] ">LinkedIn</a>
            </div>
            <div className=" flex items-center gap-5 ">
                <FaGithub size={35} color="white"/><a href="https://github.com/codehariom/" target="_blank" className="text-white text-xl tracking-[2.5px]  ">Github</a>
            </div>
          </div>
          <div className=" mt-20">
            <a><button className="py-2  bg-white text-xl   rounded-md text-black px-10 outline-4 outline-offset-4 outline-green"> Hire me Now</button></a>
          </div>
        </div>
        <div className=" p-10 ">
          <img src={img} alt="" className="  border-10 border-white  object-cover size-150 rounded-full " />
        </div>
      </div>
    </div>
  );
}

export default Home;
