import React from "react";

function Project() {
  const projectDetails = [
    {
      title: "URL Shortener with Dashboard",
      discription:
        "A full-featured URL shortener with analytics dashboard. Built using MERN stack and JWT authentication, users can track clicks and manage links securely.",
      github: "#",
      liveLink: "#",
    },
    {
      title: "Full-Stack E-commerce with Admin Panel",
      discription:
        "A modern e-commerce app built with React, Redux, and Node.js. Includes product management, cart system, Stripe payments, and secure login with role-based access.",
      github: "#",
      liveLink: "#",
    },
    {
      title: "MERN Auth System with OTP",
      discription:
        "Secure authentication system using MERN stack with OTP verification, email confirmation, JWT sessions, and password reset flow.",
      github: "#",
      liveLink: "#",
    },
    {
      title: "AI-Powered Interview Prep App",
      discription:
        "A full-stack app that simulates real-time coding interviews with AI-generated questions and feedback. Built with React, Express, and OpenAI API.",
      github: "#",
      liveLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-green pt-36 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center mb-12">
          Projects Made by Me
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {projectDetails.map((project, index) => (
            <div
              key={index}
              className="bg-[#059A00] text-white rounded-2xl p-6 w-full max-w-xs flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-5 space-y-3">
                <div className="bg-black h-40 rounded-xl flex items-center justify-center p-4">
                  <p className="text-white text-lg font-semibold text-center">
                    {project.title}
                  </p>
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-white text-sm">{project.discription}</p>
              </div>
              <div className="mt-auto flex gap-2">
                <a
                  href={project.github}
                  className="w-1/2 bg-black text-white py-2 rounded hover:bg-white hover:text-green text-center text-sm font-medium transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  className="w-1/2 bg-black text-white py-2 rounded hover:bg-white hover:text-green text-center text-sm font-medium transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
