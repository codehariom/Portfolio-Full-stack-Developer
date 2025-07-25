import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-green text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-5">
          <h1 className="flex text-2xl font-semibold items-center">
            <FaAngleLeft size={25} />
            <span className="mx-2">Code.Hariom</span>
            <FaAngleRight size={25} />
          </h1>
          <p className="text-xl">
            Full Stack Web Developer <br /> Backend Dev
          </p>
        </div>

        {/* Certificate Links */}
        <div>
          <h3 className="text-2xl tracking-wider font-semibold mb-3">Certified Links</h3>
          <ul className="list-disc list-inside space-y-1 text-left">
            <li>
              <a href="https://drive.google.com/file/d/1woOq7oUkijURWh9rgiyKdS9VNg2Onc2Q/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Full Stack UI Web with MERN
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1woOq7oUkijURWh9rgiyKdS9VNg2Onc2Q/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Data Structures & Algorithms in JavaScript
              </a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/certificates/5d0861b40798" target="_blank" rel="noopener noreferrer">
                Node.js
              </a>
            </li>
            <li>
              <a href="https://badgr.com/public/assertions/JWXFkryARZu0CnL1mpCl9A" target="_blank" rel="noopener noreferrer">
                Postman API Fundamentals
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-2xl tracking-wider font-semibold mb-3">Social Links</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a href="https://www.linkedin.com/in/realhariom/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/codehariom/" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href="https://leetcode.com/u/CODEHARIOM/" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/profile/Hariomcoder" target="_blank" rel="noopener noreferrer">HackerRank</a>
            </li>
            <li>
              <a href="https://www.instagram.com/real.hariom/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-20 text-center text-gray-400 text-md">
        © 2025 Code.Hariom. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
