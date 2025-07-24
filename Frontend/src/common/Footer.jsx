import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-green text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className=" left space-y-5">
          <h1 className=" flex text-2xl  text-white font-semibold items-center">
            <span>
              <FaAngleLeft size={25} />
            </span>
            Code.Hariom
            <span>
              <FaAngleRight size={25} />
            </span>
          </h1>
          <p className=" text-xl">Full Stack Web Developer <br /> Backend Dev</p>

        </div>

        {/* Certified Links */}
        <div>
          <h3 className="text-2xl tracking-wider font-semibold mb-3">Certificated Links</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Problem-Solving</li>
            <li>Communication</li>
            <li>Critical Thinking</li>
            <li>Teamwork</li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-2xl tracking-wider font-semibold mb-3">Menu</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Home</li>
            <li>About us</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-2xl tracking-wider font-semibold mb-3">Social Links</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>LeetCode</li>
            <li>HackerRank</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-20 text-center text-gray-400 text-md">
        Copyright © 2025 coder.hariom . All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
