import React from "react";

function Project() {
  const projectDetails = [
    {
      title: "URL Shortener with Dashboard built with MERN (MongoDB, Express, React, Node)",
      discription:
        "Click-url is a JavaScript-based web application that allows users to shorten long URLs into compact 5-character short links. Built using a modern tech MERN stack, this project provides a responsive front-end and a secure, scalable back-end The site serves as an interactive click URL handler or redirect service, highlighting expertise in building lightweight, responsive web endpoints for user engagement or data tracking purposes, with Dashboard Successfully launched and maintained a live Web project, emphasizing rapid prototyping, version control integration, and reliable online accessibility for portfolio demonstration",
      github: "https://github.com/codehariom/Click-Url-Full-Stack-Using-Mern",
      liveLink: "https://clickurl-r72u.onrender.com/",
    },
    {
      title: "E-Commerce Web Application built with MERN (MongoDB, Express, React, Node.js)",
      discription:
        "Developed a full-stack online shopping platform enabling user registration, product browsing, cart management, checkout, and order tracking. Utilized JWT-based authentication and protected routes to ensure secure access. Admin panel for managing products (create, read, update, delete), orders, and users with Dashboard Admin dashboard operations (product creation, update) handled in under 0.5 seconds  Integrated Razorpay (or other payment gateway) for secure online payments. mplemented multi-attribute product filtering (category, size, color, material, price range) and search functionality, and Optimized performance and responsive UI using React, Redux, and efficient API calls ",
      github: "https://github.com/codehariom/E-commerce-Using-MERN",
      liveLink: "https://e-commerce-using-mern-vygc.onrender.com/",
    },
    {
      title: "Nodejs + PostgreSQL + Supabase Authentication",
      discription:
        "Building a complete authentication system using React (frontend), PostgreSQL (database), and Supabase (backend/auth service). Integration between frontend React and Supabase backend via REST / API calls.. Implementation of JWT (JSON Web Token) for secure token-based authentication. Email verification flow: sending verification links to new users and validating them using Nodemailer Email OTP (One-Time Password) for enhanced security. Security best practices: storing tokens safely, validating inputs, handling errors, and maintaining session state.  Feature like Forgot password and Change password flows: secure reset links/token validation and updating passwords.",
      github: "https://github.com/codehariom/High-Backend-Auth-Security",
      liveLink: "https://github.com/codehariom/High-Backend-Auth-Security",
    },
    // {
    //   title: "AI-Powered Interview Prep App",
    //   discription:
    //     "A full-stack app that simulates real-time coding interviews with AI-generated questions and feedback. Built with React, Express, and OpenAI API.",
    //   github: "#",
    //   liveLink: "#",
    // },
  ];

  return (
    <div className="min-h-screen bg-green pt-36 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center mb-12">
          Projects Made by Me
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center">
          {projectDetails.map((project, index) => (
            <div
              key={index}
              className="bg-[#059A00] text-white rounded-2xl h-full p-6 w-full max-w-xs flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-5  space-y-3">
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
