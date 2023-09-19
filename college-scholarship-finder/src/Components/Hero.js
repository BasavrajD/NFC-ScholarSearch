import React from 'react'
import './Hero.css'
import { Hero5 } from '../assests/images';

const Hero = () => {
  return (
    <div>
      <header>
        <div className="container header-section flex body">
          <div className="header-left">
            <h1>
              Unlock Your Educational Potential <br></br>{" "}
              <span className="callToAction">Discover, Apply, Succeed!</span>
            </h1>
            <p>
            Discover scholarships that align with your aspirations and financial needs. With ScholarSearch, you're just a click away from streamlining your scholarship search, applications, and tracking, all in one convenient platform.
            </p>
          </div>
          <div className="header-right">
            <img src={Hero5} alt="hero image" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero