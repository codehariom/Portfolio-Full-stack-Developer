import React from "react";

function HeroSection() {
  return (
    <div className="h-dvh bg-green place-content-center">
      <div className="p-3 place-items-center">
        <div className="grid bg-[#059A00] md:p-15 rounded-3xl place-items-center">
          <h2 className="capitalize tracking-wide font-semibold text-3xl md:text-6xl text-center m-7 md:text-center">
            Expertise in building end-to-end solutions
            <br />
            from <span className="text-white">design</span> to{" "}
            <span className="text-white">deployment</span>
          </h2>
          <a
            href="/Hariom-Resume.pdf"
            download
            className="py-2 mb-7 mt-20 bg-white text-xl tracking-wide rounded-md text-black px-10 capitalize font-semibold"
          >
            Here is my Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
