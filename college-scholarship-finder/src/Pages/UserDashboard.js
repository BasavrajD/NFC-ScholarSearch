import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css"; // Import your CSS file
import data from "../data/csvjson.json";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function UserDashboard(props) {
  const [scholarships, setScholarships] = useState([]);
  const navigate = useNavigate();
  //  const [selectedScholarships,setSelectedScholarships] = useState([]);
  //  let filterOnBasis;
  useEffect(() => {
    if (
      props.userData.CGPA >= "9" ||
      props.userData.Income === "less-than-Rs. 5 Lakh"
    ) {
      const filteredScholarships = data.filter((row) => {
        return row.funds.includes("full") || row.funds.includes("100% ");
      });
      setScholarships(filteredScholarships);
    } else if (
      props.userData.CGPA <= "9" ||
      props.userData.Income === "Rs. 5 Lakh- Rs. 8 Lakh"
    ) {
      const filteredScholarships = data.filter((row) => {
        return !row.funds.includes("full") || !row.funds.includes("100% ");
      });
      setScholarships(filteredScholarships);
    }
  }, []);

  const handleClick = () => {
      navigate('/table');
  }
  const profilePicture =
    "https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg";

  return (
    <div>
      <Navbar />
      <div className="user-dashboard">
        <h2>Profile Details</h2>
        <div className="user-profile-img">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
          <div className="user-info">
            <h3>{props.userData.Name}</h3>
            <p>Email: {props.userData.Email}</p>
            <p>contact:{props.userData.PhoneNo}</p>
            <p>College Name:{props.userData.CollegeName}</p>
            <p>Income: {props.userData.Income}</p>
            <p>CGPA:{props.userData.CGPA}</p>
          </div>
        </div>
      </div>
      <button className="btn-secondary" onClick={handleClick}>Your ScholarShips</button>
      <h2 style={{textAlign:"center", marginBottom:30}}>Here are your Personalized Scholarship recommendation</h2>
      {
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Degree</th>
                <th scope="col">Funds</th>
                <th scope="col">Date</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map((row, index) => (
                <tr key={index}>
                  <td>{row.title}</td>
                  <td>{row.degrees}</td>
                  <td>{row.funds}</td>
                  <td>{row.date}</td>
                  <td>{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
      <Footer />
    </div>
  );
}

export default UserDashboard;
