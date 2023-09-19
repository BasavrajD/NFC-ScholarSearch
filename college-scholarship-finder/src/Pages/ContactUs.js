import React, { useState } from 'react';
import './ContactUs.css'; // Import your CSS file for styling
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ContactUs() {
    // State for user input
    const [userEmail, setUserEmail] = useState('');
    const [userQuery, setUserQuery] = useState('');

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };

    const handleQueryChange = (e) => {
        setUserQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission logic here (e.g., send data to a server)

        // Clear the form fields
        setUserEmail('');
        setUserQuery('');
    };

    return (
      <div>
        <Navbar/>
        <div className="contact-us-container">
          <div className="contact-info">
            <h2>CONTACT US</h2>
            <p>Email: scholarsearch@gmail.com</p>
            <p>
              Address: W. P. G. Kher Marg, 32nd Road, Marg, Off Linking Rd, TPS
              III, Bandra West, Mumbai, Maharashtra.
            </p>
          </div>
          <div className="contact-form">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="userEmail">Your Email:</label>
                <input
                  type="email"
                  id="userEmail"
                  value={userEmail}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="userQuery">Your Query:</label>
                <textarea
                  id="userQuery"
                  rows="4"
                  value={userQuery}
                  onChange={handleQueryChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    );
}

export default ContactUs;
