import React from 'react'
import { Hero4 } from '../assests/images'
import './LearnAboutDonation.css'
const LearnAboutDonation = () => {
  return (
    <div>
      <h1 className="heading mx-auto py-4 px-2">LEARN ABOUT SCHOLARSHIPS</h1>
      <div className="flex header-section">
        <div className="left-section">

          <img src={Hero4} alt="" className="twoDonors" />
          <p className="textBelow">
          At ScholarSearch, we're committed to not only connecting you with scholarships but also equipping you with the knowledge you need to succeed. Explore our educational resources, and take the first step toward achieving your educational aspirations.
          </p>
        </div>

      </div>
    </div>
  );
}

export default LearnAboutDonation