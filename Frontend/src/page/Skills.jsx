import React from "react";

function Skills() {
  return (
    <div className="min-h-screen bg-green px-4 py-10 flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">

        {/* Soft Skills */}
        <div className="flex-1 space-y-6">
          <h2 className="font-semibold text-lg sm:text-xl bg-white text-green py-3 px-6 rounded-lg w-max">
            Soft Skills
          </h2>
          <ol className="list-disc text-base sm:text-lg text-white pl-5 space-y-2">
            <li>Problem-Solving</li>
            <li>Communication & Time Management</li>
            <li>Critical Thinking</li>
            <li>Teamwork and Collaboration</li>
            <li>Creative Design</li>
          </ol>
        </div>

        {/* Tech Skills */}
        <div className="flex-1 space-y-6">
          <h2 className="font-semibold text-lg sm:text-xl bg-white text-green py-3 px-6 rounded-lg w-max">
            Tech Skills
          </h2>
          <ol className="list-disc text-base sm:text-lg text-white pl-5 space-y-3">
            <li>
              <strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript, Express.js, Node.js, jQuery, API, SaaS
            </li>
            <li>
              <strong>Frameworks:</strong> React, Tailwind CSS, Socket.io, JWT, Axios, Redux Toolkit
            </li>
            <li>
              <strong>Tools:</strong> NPM, Postman, GraphQL, VS Code, GitHub, Git, Google Analytics, Docker, System Design
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, SQL, Redis, AWS, CI/CD
            </li>
            <li>
              <strong>UI/UX:</strong> Figma, Adobe XD, Wireframing & Prototyping
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Skills;
