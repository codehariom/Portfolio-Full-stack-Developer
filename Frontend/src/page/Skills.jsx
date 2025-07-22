import React from "react";

function Skills() {
  return (
    <div className="min-h-screen bg-green grid place-items-center px-4 py-15 ">
      <div className="grid md:flex gap-10 items-start justify-center">
        {/* Soft Skills */}
        <div className="grid gap-6">
          <h2 className="font-semibold rounded-lg text-xl bg-white py-4 px-8 w-max">
            Soft Skills
          </h2>
          <ol className="list-disc text-xl text-white pl-5 space-y-2">
            <li>Problem-Solving</li>
            <li>Communication & Time Management</li>
            <li>Critical Thinking</li>
            <li>Teamwork and Collaboration</li>
            <li>Creative Design</li>
          </ol>
        </div>

        {/* Tech Skills */}
        <div className="grid gap-6">
          <h2 className="font-semibold  text-xl rounded-lg bg-white py-4 px-8 w-max ">
            Tech Skills
          </h2>
          <ol className="list-disc text-xl text-white pl-5 space-y-3">
            <li>
              Programming Languages: HTML, CSS, JavaScript, TypeScript, Express.js, Node.js, jQuery, API, SaaS
            </li>
            <li>
              Libraries/Frameworks: React, Tailwind CSS, Socket.io, JWT, Axios, Redux Toolkit
            </li>
            <li>
              Tools / Platforms: NPM, Postman, GraphQL, VS  Code, GitHub, Git, Google Analytics, Docker, System Design
            </li>
            <li>Databases: MongoDB, SQL, Redis, AWS, CI/CD</li>
            <li>UI/UX Collaboration: Figma, Adobe XD, Wireframing & Prototyping</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Skills;
