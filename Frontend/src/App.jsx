import React from 'react'
import Home from "./page/Home"
import Navbar from './common/Navbar'
import About from './page/About'
import HeroSection from './components/HeroSection'
import Skills from './page/Skills'
import Tools from './page/Tools'
import Footer from './common/Footer'
import Projects from './page/Project'
import Contact from './page/Contact'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Tools/>
    <Projects/>
    <Contact/>
    <HeroSection/>
    <Footer/>
    </>
    
  )
}

export default App