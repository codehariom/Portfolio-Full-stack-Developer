import React from "react";
import AboutImg from "/public/about.jpg";

function About() {
  return (
    <div className=" bg-green sm:h-screen  w-full px-10 justify-between items-center place-content-center">
      <div className=" grid grid-cols-1 order-1 md:grid-cols-2">
        <div className="justify-items-center">
          <img
            src={AboutImg}
            alt=""
            className="  border-10  border-white rounded-full object-cover size-150"
          />
        </div>
        <div className=" text-left items-center place-content-start ">
          <div>
            <h4 className=" text-3xl text-white font-semibold mb-10">
              About Me
            </h4>
            <div>
              <div>
                <p className=" text-xl font-light text-white wrap-normal  tracking-wide">
                  Hi there! I'm a passionate Full-Stack Web Developer with a
                  knack for turning innovative ideas into functional, scalable,
                  and intuitive digital products. With a strong foundation in
                  front-end and back-end technologies, I specialise in
                  delivering seamless user experiences and robust system
                  architectures.
                </p>
              </div>
              <ul className=" mt-6 ml-10 list-disc">
                <li className="text-xl font-light text-white tracking-wide">
                  Expertise in buildingend-to-end solutions from design to
                  deployment.
                </li>
                <li className="text-xl font-light text-white tracking-wide">
                  A deep understanding of responsive design, performance
                  optimisation, and accessibility standards.
                </li>
                <li className="text-xl font-light text-white tracking-wide"> 
                  A commitment to continuous learning and staying up-to-date
                  with the latest web technologies.
                </li>
              </ul>
              <div className="mt-5">
                <p className="text-xl font-light text-white wrap-normal tracking-wide" >Education I have completed my Bachelor’s Degree in Computer Science and Engineering (BCA)  From Varanasi <br/> I aslo Completed Master Degree in Computer Science From bangalore ,  <br/> Certificated in Interactive web and mobile Applications from BHU  <br/> Full stack Complted my one of the most popular coaching Naresh IT in Haydrbad </p>
              </div>
            </div>
          </div>
          <div className="flex-row max-w-full text-center  sm:flex gap-5 mt-10 ">
            <p className=" bg-white py-2 px-6 rounded-lg font-semibold hover:outline-4 hover:outline-white hover:bg-green hover:text-white">Frontend Tech</p>
            <p className=" bg-white py-2 px-6 rounded-lg font-semibold hover:outline-4 hover:outline-white hover:bg-green hover:text-white">Backend Tech</p>
            <p className=" bg-white py-2 px-6 rounded-lg font-semibold hover:outline-4 hover:outline-white hover:bg-green hover:text-white">Cloud Service</p>
            <p className=" bg-white py-2 px-6 rounded-lg font-semibold hover:outline-4 hover:outline-white hover:bg-green hover:text-white">UI/UX Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
