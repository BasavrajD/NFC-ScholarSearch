

import Hero from "../Components/Hero";
import LearnAboutDonation from "../Components/LearnAboutDonation";
import Transfusion from "../Components/Transfusion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <LearnAboutDonation />

      <Transfusion />
      <Footer/>
    </div>
  );
}

export default Home