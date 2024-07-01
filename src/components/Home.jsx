import React from 'react'
import CustomNavbar from './Navbar/Navbar'
import HeroSection from './HeroSection/Herosection'
import Skills from './Skills/Skills'
import Projects from './Project/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
const Home = () => {
  return (
    <div>
      <CustomNavbar/>
      <HeroSection/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
