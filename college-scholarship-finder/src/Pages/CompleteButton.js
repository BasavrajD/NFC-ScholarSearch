import React from "react";
import "./CompleteButton.css";
import { Hero5 } from "../assests/images";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const CompleteButton = () => {
  return (
    <div>
      <Navbar />
      <header>
        <div className="container header-section flex body completeButton">
          <div className="header-left">
            <h1>
              For personalized recommendations<br></br>{" "}
              <span className="callToAction">Set Up Your Profile!</span>
            </h1>
            <a href="#" className="primary-button get-started-btn">
              <Link className="nav-link" to="/completeProfileForm">
                Complete Your Profile
              </Link>
            </a>
          </div>
          <div className="header-right">
            <img src={Hero5} alt="hero image" />
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default CompleteButton;
