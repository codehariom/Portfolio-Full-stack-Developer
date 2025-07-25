import React, { useRef } from "react";
import Navbar from "./common/Navbar";
import Home from "./page/Home";
import About from "./page/About";
import Skills from "./page/Skills";
import Projects from "./page/Project";
import Contact from "./page/Contact";
import Tools from "./page/Tools";
import HeroSection from "./components/HeroSection";
import Footer from "./common/Footer";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const toolsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        refs={{ homeRef, aboutRef, skillsRef, toolsRef, projectsRef, contactRef }}
      />

      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={toolsRef}><Tools /></div>
      <div ref={projectsRef}><Projects /></div>
      <HeroSection />
      <div ref={contactRef}><Contact /></div>

      <Footer />
    </>
  );
}

export default App;
