import React from 'react'
import Home from "./page/Home"
import Navbar from './common/Navbar'
import About from './page/About'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <HeroSection/>

    </>
    
  )
}

export default App