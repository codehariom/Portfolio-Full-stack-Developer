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
            <li>Critical Thinking & Self-Learning </li>
            <li>Teamwork and Collaboration</li>
            <li>Creative Design</li>
            <li>Debuging Code</li>
            <li>Attention to Detail </li>
          </ol>
        </div>

        {/* Tech Skills */}
        <div className="flex-1 space-y-6">
          <h2 className="font-semibold text-lg sm:text-xl bg-white text-green py-3 px-6 rounded-lg w-max">
            Tech Skills
          </h2>
          <ol className="list-disc text-base sm:text-lg text-white pl-5 space-y-3">
            <li>
              <strong>Languages:</strong> HTML, CSS, JavaScript, ExpressJS, NodeJS, Typescript, SaaS, RestAPI,Git, jQuery
            </li>
            <li>
              <strong>Frameworks:</strong> React, Tailwind, Bootstrap, Socket.io, JWT, Axios, Formik, Shadcn-UI, Material-UI, NPM
            </li>
            <li>
              <strong>Tools:</strong> Postman, GraphQL, Github, GoogleAnalytics, VSCode, Cursor, ClaudeAi, Grok/ChatGPT Google Analytics, Docker
            </li>
            <li>
              <strong>Databases:</strong> SQL, MongoDB, Redis, PostgreSQL, Nginx, AWSDynamoDB, Firebase, SystemDesign

            </li>
            <li>
              <strong>UI/UX:</strong> Figma, Adobe XD, Wireframing & Prototyping
            </li>
            <li>
              <strong>CloudTools:</strong> AWS, AWSLambda, Vercel, Docker, CI/CDPipeline, Linux, AWSEC2, AWSRoute53, AWSS3, AWSIAM
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Skills;
