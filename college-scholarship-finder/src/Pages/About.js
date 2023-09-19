import React from 'react'
import AboutHeader from '../Components/AboutHeader'
import AboutVisionMission from '../Components/AboutVisionMission'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <Navbar/>
        <AboutHeader/>
        <AboutVisionMission/>
        <Footer/>
    </div>
  )
}

export default About