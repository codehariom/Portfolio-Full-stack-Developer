import React from "react";
import AboutImg from "/public/about.jpg";

function About() {
  return (
    <div className="bg-green w-full px-6 sm:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={AboutImg}
            alt="About"
            className="hidden md:block w-64 h-64 lg:w-120 lg:h-120 rounded-full object-cover border-4 border-white"
          />
        </div>

        {/* Text Content */}
        <div className="text-left space-y-6">
          <h4 className="text-2xl sm:text-3xl text-white font-semibold">About Me</h4>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            Hi there! I'm a passionate Full-Stack Web Developer with a knack for turning innovative ideas into functional, scalable, and intuitive digital products. With a strong foundation in front-end and back-end technologies, I specialise in delivering seamless user experiences and robust system architectures.
          </p>

          <ul className="list-disc pl-5 space-y-3">
            <li className="text-white text-base sm:text-lg leading-snug">
              Expertise in building end-to-end solutions from design to deployment.
            </li>
            <li className="text-white text-base sm:text-lg leading-snug">
              Deep understanding of responsive design, performance optimisation, and accessibility standards.
            </li>
            <li className="text-white text-base sm:text-lg leading-snug">
              Commitment to continuous learning and staying updated with the latest technologies.
            </li>
          </ul>

          <p className="text-white text-base sm:text-lg leading-relaxed">
            <strong>Education:</strong> I have completed my Bachelor's Degree in Computer Science and Engineering (BCA) from Varanasi. I also completed my Master's Degree in Computer Science from Bangalore. Additionally, I'm certified in Interactive Web & Mobile Applications from BHU and completed Full-Stack development from Naresh IT, Hyderabad.
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center sm:justify-start">
            <p className="bg-white text-green font-semibold px-6 py-2 rounded-lg hover:bg-green hover:text-white hover:outline-white hover:outline transition-all">Frontend Tech</p>
            <p className="bg-white text-green font-semibold px-6 py-2 rounded-lg hover:bg-green hover:text-white hover:outline-white hover:outline transition-all">Backend Tech</p>
            <p className="bg-white text-green font-semibold px-6 py-2 rounded-lg hover:bg-green hover:text-white hover:outline-white hover:outline transition-all">Cloud Service</p>
            <p className="bg-white text-green font-semibold px-6 py-2 rounded-lg hover:bg-green hover:text-white hover:outline-white hover:outline transition-all">UI/UX Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
