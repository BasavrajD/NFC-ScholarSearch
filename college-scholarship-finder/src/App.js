import {
  Routes,
  Route,
  useNavigationType,
  useLocation, 
} from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogIn from "./Pages/LogIn";
// import Dashboard from "./Pages/Dashboard";
import ResourceHub from "./Pages/Register";
import SignUp from "./Pages/SignUp";
// import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Session from "./Pages/Session";
import CompleteButton from './Pages/CompleteButton';
import CompleteProfile from './Pages/NFC1'
import UserDashboard from './Pages/UserDashboard';
import Crowd from "./Pages/Crowd";
import ScholarshipTable from "./Pages/ScholarshipTable";

// import Footer from "./Components/Footer";
import { useEffect } from "react";
import {  BrowserRouter as Router } from "react-router-dom";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [userInfo,setUserInfo] = useState({});

  const getUserInfo = (info) => {
      setUserInfo(info);
  }

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/resource-hub":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    // <Router>
    <div>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/session" element={<Session />} />
        <Route path="/resource-hub" element={<ResourceHub />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/completeProfile" element={<CompleteButton/>}/>
        <Route path="/completeProfileForm" element={<CompleteProfile getUserInfo={getUserInfo}/>}/>
        <Route path="/dashboard" element={<UserDashboard userData={userInfo}/>}/>
        <Route path="/crowd" element={<Crowd/>}/>
        <Route path="/table" element={<ScholarshipTable/>}/>
      </Routes>
    </div>
    // </Router>
  );
}
export default App;
