import React, { useState } from 'react';
import './NFC1.css'; // Import your CSS file
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


function NFC1(props) {
  const navigate = useNavigate();
  const [userInfo,setUserInfo] = useState({Name:"",Email:"",CGPA:"",CollegeName:"",PhoneNo:"",Income:""});
  const clickHandler = () => {
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const cgpa =  document.querySelector("#cgpa");
    const college = document.querySelector("#college");
    const contact = document.querySelector("#contact");
    const income = document.querySelector("#income");
    setUserInfo({
       Name:name.value,
       Email:email.value,
       CGPA:cgpa.value,
       CollegeName:college.value,
       PhoneNo:contact.value,
       Income:income.value
    })
  }

   const handleSubmit = (e) => {
     e.preventDefault();
     props.getUserInfo(userInfo);
     navigate('/dashboard')
   };

  return (
    <div>
      <Navbar />
      <div className="box-container">
        <div className="profile-form-container">
          <h2>Complete Your Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="cgpa">CGPA:</label>
              <input type="number" id="cgpa" name="CGPA" required />
            </div>

            <div className="form-group">
              <label htmlFor="college">College Name:</label>
              <input type="text" id="college" name="college" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone No:</label>
              <input type="number" id="contact" name="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="income">Income:</label>
              <select type="text" id="income" name="income" required>
                <option value="" disabled>
                  Select Income Range
                </option>
                <option value="less-than-Rs. 5 Lakh">
                  Less than Rs. 5 Lakh
                </option>
                <option value="Rs. 5 Lakh- Rs. 8 Lakh">
                  Rs. 5 Lakh- Rs. 8 Lakh
                </option>
                <option value="More than Rs. 8 Lakh">
                  More than Rs. 8 Lakh
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="submit-button"
              onClick={clickHandler}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}



export default NFC1;


