import { useCallback } from "react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LogIn.css";
import { useDispatch } from "react-redux";

import { authActions } from "../redux/store";

import toast, { Toaster } from "react-hot-toast";

const LogIn = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //state
  const [inputs, setInputs] = useState({
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
      const response = await fetch("http://localhost:5001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputs.email,
          password: inputs.password,
        }),
      });

      // if (!response.ok) {
      //   throw new Error("Login request failed");
      // }

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        dispatch(authActions.login());
        toast.success("Login Sucessfull!")
        navigate("/completeProfile");
      } else {
        // Handle unsuccessful login here
        toast.error("Login Failed!");
        console.log("Login failed:", data.error); // Log the error message from the server
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="log-in">
        <div className="sign-up">
          {/* <ToastContainer/> */}
          <Toaster/>
          <div className="log-in1">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img className="vector-icon1" alt="" src="/vector1.svg" />
            <img className="vector-icon2" alt="" src="/vector2.svg" />
            <img className="vector-icon3" alt="" src="/vector2.svg" />
            <div className="right">
              <div className="log-in2">Log In</div>
              <button className="log-in-wrapper">
                <div className="log-in3">Log in</div>
              </button>
              <input
                className="input-feild"
                id="input-field"
                placeholder="Email"
                type="text"
                value={inputs.email}
                onChange={handleChange}
                name="email"
              />
              <Link className="dont-have-an-container" to="/sign-up">
                <span>{`Don’t have an account? `}</span>
                <span className="sign-up1"> Sign up.</span>
              </Link>
              <input
                className="input-feild1"
                placeholder="Password"
                type="password"
                value={inputs.password}
                onChange={handleChange}
                name="password"
              />
            </div>
            <b className="discover-opportunities-secure">
              Discover Opportunities, Secure Your Future
            </b>
            <img
              className="undraw-education-f8ru-1-icon"
              alt=""
              src="/undraw-education-f8ru-1.svg"
            />
            <div className="phstudent-fill" />
          </div>
        </div>
        <div className="vector-parent">
          <img className="vector-icon4" alt="" src="/vector3.svg" />
          <h3 className="scholarsearch">ScholarSearch</h3>
        </div>
      </div>
    </form>
  );
};

export default LogIn;
