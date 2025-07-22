import React from 'react'
import Home from "./page/Home"
import Navbar from './common/Navbar'
import About from './page/About'
// import HeroSection from './components/HeroSection'
import Skills from './page/Skills'
import Tools from './page/Tools'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Tools/>
    {/* <HeroSection/> */}

    </>
    
  )
}

export default App