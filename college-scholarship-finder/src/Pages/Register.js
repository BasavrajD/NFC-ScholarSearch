import React, { useState, useEffect } from "react";
import data from "../data/csvjson.json";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Nav } from "react-bootstrap";
import Card from "../Components/Card";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
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

   const imgIdx = Math.floor(Math.random() * (5 - 1 + 1) + 1);
   
   const toasterHandler = () => {
    toast.success("Successfully Applied");
   }
  return (
    <div>
      <Navbar />
      <Toaster/>
      <div className="container">
        <form
          className="row g-3 mt-4"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className="col-md-4" style={{ display: "flex" }}>
            <label htmlFor="inputCountry" className="form-label px-5 py-2">
              Country:
            </label>
            <select id="inputCountry" className="form-select">
              <option>india</option>
              <option>united-states</option>
              <option>united-kingdom</option>
              <option>europe</option>
              <option>south-africa</option>
              <option>nigeria</option>
              <option>pakistan</option>
              <option>canada</option>
            </select>
          </div>

          <div
            className="col-md-4"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <label className="form-label" style={{ paddingRight: 30 }}>
              Degrees:{" "}
            </label>
            {degrees.map((degree, index) => (
              <div className="form-check" key={index}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`degreeCheckbox-${index}`}
                  value={degree}
                  checked={selectedDegrees.includes(degree)}
                  onChange={handleDegreeChange}
                  style={{ border: "2px solid black" }}
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

          <div className="col-12 my-5">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={clickHandler}
              style={{
                marginLeft: 600,
                backgroundColor: "#6474E5",
                width: 250,
              }}
            >
              Search
            </button>
          </div>
        </form>

        <div className="box-container">
          {scholarships.map((row, index) => {
            return (
              <Card title={row.title} date={row.date} degrees={row.degrees} toasterHandler={toasterHandler}/>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
