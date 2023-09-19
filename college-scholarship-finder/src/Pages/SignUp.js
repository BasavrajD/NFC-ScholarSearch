import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  //state
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  //handle input Change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const { data } = await axios.post("/api/users/register", {
      //   username: inputs.name,
      //   email: inputs.email,
      //   password: inputs.password,
      // });
      // if (data.success) {
      //   console.log("Hello");
      //   navigate("/login");
        
      // }
      fetch("http://localhost:5001/api/users/register", {
        method: "POST",

        body: JSON.stringify({
          username: inputs.name,
          email: inputs.email,
          password: inputs.password,
        }),

        headers: {
          "Content-type": "application/json",
        },
      });
      navigate('/login');
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign-up4">
        <div className="sign-up5">
          <div className="log-in6">
            <img className="vector-icon7" alt="" src="/vector.svg" />
            <img className="vector-icon8" alt="" src="/vector1.svg" />
            <img className="vector-icon9" alt="" src="/vector2.svg" />
            <img className="vector-icon10" alt="" src="/vector2.svg" />
            <div className="phstudent-fill1" />
            <div className="right2">
              <div className="log">
                <h1 className="sign-up6">Sign Up</h1>
                <button className="sign-up-wrapper">
                  <div className="sign-up7">Sign Up</div>
                </button>
                <input
                  className="input-feild2"
                  id="input-field2"
                  placeholder="Email"
                  type="email"
                  value={inputs.email}
                  onChange={handleChange}
                  name="email"
                />
                <input
                  className="input-feild3"
                  id="input-field3"
                  placeholder="Name"
                  type="text"
                  value={inputs.name}
                  onChange={handleChange}
                  name="name"
                />
                <input className="input-feild4" id="input-field4" placeholder="Age" type="number" />
                <Link className="already-have-an-container" to="/">
                  <span>{`Already have an account? `}</span>
                  <span className="log-in7">Log In.</span>
                </Link>
                <input
                  className="input-feild5"
                  placeholder="Create Password"
                  type="password"
                  value={inputs.password}
                  onChange={handleChange}
                  name="password"
                />
                <input
                  className="input-feild6"
                  placeholder="Confirm Password"
                  type="password"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-div">
          <img className="vector-icon11" alt="" src="/vector4.svg" />
          <h3 className="scholarsearch3">ScholarSearch</h3>
        </div>
        <img
          className="undraw-education-f8ru-1-icon1"
          alt=""
          src="/undraw-education-f8ru-11.svg"
        />
        <b className="discover-opportunities-secure1">
          Discover Opportunities, Secure Your Future
        </b>
      </div>
    </form>
  );
};

export default SignUp;
