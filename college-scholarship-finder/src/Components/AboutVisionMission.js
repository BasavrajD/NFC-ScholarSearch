import React from "react";
import "./AboutVisionMission.css";


import { About1, About2, About3, About4, About5, Donor1 } from "../assests/images";
const AboutVisionMission = () => {
  return (
    <>
      <div>
        <section className="big-feature-section">
          <div className="container flex big-feature-container">

            <div className="feature-desc flex">
              <h4>Our Vision</h4>
              <hr className="hr1" />
              <p>
              At ScholarSearch, our vision is a world where every student has equal access to quality education, regardless of their financial circumstances. We envision a future where the pursuit of knowledge is not hindered by financial barriers. Through innovative technology and unwavering dedication, we aim to expand our reach, connecting students with even more scholarship opportunities and providing them with the tools to navigate the educational landscape confidently. We see a future where our platform becomes a global force for positive change, leveling the playing field and empowering students to reach their full potential. Together, we are shaping a brighter tomorrow, where education is a bridge to unlimited possibilities
              </p>
            </div>
          </div>
        </section>

        <section className="big-feature-section">
          <div
            className="container flex big-feature-container"
            id="second-big-feature"
          >

            <div className="feature-desc flex">
              <h4>Our Mission</h4>
              <hr className="hr1" />

              <p>
              At ScholarSearch, our mission is to democratize education by connecting students with the financial resources they need to pursue their academic dreams. We are dedicated to simplifying the scholarship and grant application process, making it more accessible, efficient, and inclusive. Our commitment is to empower students from all backgrounds to access quality education, unlock their potential, and build a brighter future. Through personalized recommendations, comprehensive resources, and unwavering support, we strive to be the catalyst that transforms aspirations into achievements. Together, we are redefining the landscape of educational opportunities, one scholarship at a time.
              </p>
            </div>
          </div>
        </section>

        
      </div>
      <hr className="hr2" />
      
    </>
  );
};

export default AboutVisionMission;
