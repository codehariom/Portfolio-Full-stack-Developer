import React from "react";
import img from "/public/home.png";
import {ReactTyped} from "react-typed"

function Home() {
  return (
    <section className="bg-gradient-to-b from-black to-90% to-green h-dvh">
      <div  className=" grid grid-cols-1 md:grid-cols-2 md:gap-2 justify-between ">
        <div>
               <p className=' text-xl text-center m-5' > Hi, I'm </p>
                <h1 className='text-4xl text-center sm:text-3xl'> Hariom 
                    <ReactTyped
                            strings={[ "-Fronted Developer ","-UI Design ","-React Developer","-Data Analyst"]}
                            typeSpeed={150} backSpeed={150} loop  className='ml-1'>
                    </ReactTyped>
                </h1>
        </div>

          <div>
            <img src={img} alt="Hariom Pic" className=" rounded-full" />
          </div>
        
      </div>
    </section>
  );
}

export default Home;
