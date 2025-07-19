import React from "react";
import img from "/public/home.png";

function Home() {
  return (
    <section className=" bg-gradient-to-b from-black to-70% to-green  h-dvh">
      <div>
        <div className=" flex flex-1/2 justify-between gap-10">
          <div>
              <div>

                <h2 className="text-5xl">hariom</h2>
              </div>
          </div>
          <div>
            <img src={img} alt="Hariom Pic" className=" rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
