import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaDocker, FaAws,
  FaFigma, FaBootstrap, FaWordpress, FaDigitalOcean, FaNodeJs,
  FaHtml5, FaReact, FaLink
} from "react-icons/fa";
import {
  RiTailwindCssFill, RiNpmjsLine
} from "react-icons/ri";
import {
  SiSocketdotio, SiRedux, SiPostman, SiTypescript,
  SiMongodb, SiExpress, SiJquery, SiShadcnui, SiFramer,
  SiRender, SiMysql
} from "react-icons/si";
import {
  GrGraphQl, GrCloudComputer
} from "react-icons/gr";
import {
  DiRedis
} from "react-icons/di";
import {
  TbApi
} from "react-icons/tb";
import {
  VscVscode
} from "react-icons/vsc";

function Tools() {
  const iconClass = "p-3 mx-3 rounded-full bg-white";

  return (
    <div className="min-h-screen bg-green px-4 py-10 flex flex-col justify-center items-center">
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10">
        Tools & Technologies I've Used
      </h2>

      <div className="w-full space-y-6">
        <Marquee pauseOnHover direction="left" autoFill speed={60} className="gap-6">
          {[FaHtml5, FaCss3Alt, FaJs, SiTypescript, SiExpress, FaNodeJs, SiMongodb, SiJquery].map((Icon, idx) => (
            <div key={idx} className={iconClass}><Icon size={45} /></div>
          ))}
        </Marquee>

        <Marquee pauseOnHover direction="right" autoFill speed={60} className="gap-6">
          {[TbApi, FaReact, RiTailwindCssFill, SiSocketdotio, SiRedux, RiNpmjsLine, SiPostman, GrGraphQl].map((Icon, idx) => (
            <div key={idx} className={iconClass}><Icon size={45} /></div>
          ))}
        </Marquee>

        <Marquee pauseOnHover direction="left" autoFill speed={60} className="gap-6">
          {[FaGitAlt, FaGithub, FaDocker, GrCloudComputer, SiMysql, DiRedis, FaAws].map((Icon, idx) => (
            <div key={idx} className={iconClass}><Icon size={45} /></div>
          ))}
        </Marquee>

        <Marquee pauseOnHover direction="right" autoFill speed={60} className="gap-6">
          {[FaLink, FaFigma, SiShadcnui, SiFramer, SiRender, FaWordpress, FaBootstrap, FaDigitalOcean].map((Icon, idx) => (
            <div key={idx} className={iconClass}><Icon size={45} /></div>
          ))}
        </Marquee>

        <Marquee pauseOnHover direction="left" autoFill speed={60} className="gap-6">
          {[VscVscode, FaCss3Alt, FaJs, SiTypescript, SiExpress, FaNodeJs, SiMongodb, SiJquery].map((Icon, idx) => (
            <div key={idx} className={iconClass}><Icon size={45} /></div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Tools;
