import React from 'react'
import './AboutHeader.css'
import { About1,About2,About3,Hero2,About5 } from '../assests/images';
const AboutHeader = () => {
  return (
    <>
      <div className="header header-section container flex">
        <div className="header-left">
          <h1>Who are we?</h1>
          <hr className="hr1" />
          <p className='flex info'>
          ScholarSearch is a passionate team of educators, technologists, and visionaries united by a singular mission: to make quality education accessible to all. With the ever-rising costs of higher education, we understand the challenges students face. That's why we've dedicated ourselves to creating a platform that simplifies the scholarship and grant discovery process. Our commitment goes beyond just connecting you with opportunities; we're your partners on the path to educational success. We believe that every student deserves the chance to fulfill their academic dreams, and we're here to provide the guidance, resources, and support you need to make those dreams a reality. Join us on this transformative journey, where education is not just a goal, but a shared passion.
          </p>
        </div>
        <div className="header-right">
          <img src={Hero2} alt="" id="aboutheaderimg1"/>
        </div>
      </div>
      <hr className="hr2" />
    </>
  );
}

export default AboutHeader