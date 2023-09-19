import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ResourceHub.css";
import React, { useState, useEffect } from "react";
import data from "../data/csvjson.json";
const ResourceHub = () => {

  const [display, setDisplay] = useState(false);
  const [country, setCountry] = useState("India");
  const [scholarships, setScholarships] = useState([]);
  const [selectedDegrees, setSelectedDegrees] = useState([]);
  const [uniqueDegrees, setUniqueDegrees] = useState([]);

  const degrees = ["Master", "Bachelor", "Phd", "Course"];
  useEffect(() => {
    const degreesSet = new Set(data.map((row) => row.degrees));
    const degreesArray = Array.from(degreesSet);
    setUniqueDegrees(degreesArray);
    console.log(uniqueDegrees);
  }, []);

  const handleDegreeChange = (event) => {
    const degreeValue = event.target.value;
    const updatedSelectedDegrees = [...selectedDegrees];

    if (event.target.checked) {
      updatedSelectedDegrees.push(degreeValue);
    } else {
      const index = updatedSelectedDegrees.indexOf(degreeValue);
      if (index !== -1) {
        updatedSelectedDegrees.splice(index, 1);
      }
    }

    setSelectedDegrees(updatedSelectedDegrees);
    console.log(selectedDegrees);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const selectElement = document.querySelector("#inputCountry");
    const selectedCountry = selectElement.value; // Get the selected country value

    // Filter the data based on the selected country
    const filteredScholarships = data.filter((row) => {
      return (
        (selectedDegrees.length === 0 ||
          selectedDegrees.includes(row.degrees)) &&
        row.location === country
      );
    });

    setCountry(selectedCountry); // Update the state with the selected country
    setScholarships(filteredScholarships); // Update the state with the filtered scholarships
    setDisplay(true);
  };
  return (
    <div className="resource-hub">
      <header className="sign-up3">
        <img className="log-in5" alt="" src="/log-in1.svg" />
      </header>
      <div className="right1">
        <button className="find-wrapper">
          <div className="find">FIND</div>
        </button>
        <Form.Select className="input-feild-formselect" id="inputCountry">
          <option>Country</option>
          <option value="india">india</option>
          <option value="united-states">united-states</option>
          <option value="united-kingdom">united-kingdom</option>
          <option value="europe">europe</option>
          <option value="south-africa">south-africa</option>
          <option value="nigeria">nigeria</option>
          <option value="pakistan">pakistan</option>
          <option value="canada">canada</option>
        </Form.Select>
        {/* <div className="grommet-iconscheckbox-parent">
          <input className="grommet-iconscheckbox" type="checkbox" />
          <input className="grommet-iconscheckbox1" type="checkbox" />
          <input className="grommet-iconscheckbox2" type="checkbox" />
          <input className="grommet-iconscheckbox3" type="checkbox" />
          <div className="master">Master</div>
          <div className="bachelor">Bachelor</div>
          <div className="phd">PHD</div>
          <div className="course">Course</div>
        </div> */}
        <div className="col-md-4" id="courses">
          <label className="form-label">Degrees</label>
          {degrees.map((degree, index) => (
            <div className="form-check" key={index}>
              <input
                type="checkbox"
                className="form-check-input"
                id={`degreeCheckbox-${index}`}
                value={degree}
                checked={selectedDegrees.includes(degree)}
                onChange={handleDegreeChange}
              />
              <label
                className="form-check-label"
                htmlFor={`degreeCheckbox-${index}`}
              >
                {degree}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="vector-container">
        <img className="vector-icon6" alt="" src="/vector4.svg" />
        <div className="scholarsearch2">ScholarSearch</div>
      </div>
      <Link className="home1" to="/dashboard">{`Home `}</Link>
      <b className="about1">About</b>
      <b className="contact1">Contact</b>
      <b className="your-profile1">Your Profile</b>
    </div>
  );
};

export default ResourceHub;
