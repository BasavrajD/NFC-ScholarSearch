import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";

import "./Navbar.css";
const Navbar = () => {
  //global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(isLogin);
  //state
  const [value, setValue] = useState();

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
        <div className="container-fluid">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-mortarboard"
            viewBox="0 0 16 16"
          >
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
          </svg>
          <h3 style={{ marginLeft: 10, marginTop: 10 }}>ScholarSearch</h3>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-links"
            id="navbarSupportedContent nav-links"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex">
              <li>
                <img src="../" alt="" />
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </a>
              </li>
              {isLogin && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      <Link className="nav-link" to="/resource-hub">
                        Find Your Scholarship
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      <Link className="nav-link" to="/session">
                        Schedule a session
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      <Link className="nav-link" to="/crowd">
                        Funding
                      </Link>
                    </a>
                  </li>
                </>
              )}
              {!isLogin && (
                <>
                  <li>
                    <a href="#" className="hover-link secondary-button login">
                      <Link to="/login">Log in</Link>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover-link secondary-button ">
                      <Link to="/sign-up">Sign Up</Link>
                    </a>
                  </li>
                </>
              )}
              {isLogin && (
                <li>
                  <a
                    href="#"
                    className="hover-link secondary-button login"
                    onClick={handleLogout}
                  >
                    <Link to="/">Logout</Link>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
