import React from 'react';
import './Card.css'; // Import your CSS file for styling
import data from "../data/csvjson.json";
import {Scholarship3} from "../assests/images";
import toast, { Toaster } from "react-hot-toast";

function Card(props) {
  let {title,date,degrees} = props;
  const applyHandler = () => {
    props.toasterHandler();
  }
  return (
    <div className="card">
      {/* <Toaster /> */}
      <div className="card-image-container">
        <img src={Scholarship3} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="Deadline">Deadline:{date}</p>
        <h3 className="card-title">{degrees}</h3>
        <button className="apply-button" onClick={applyHandler}>Apply</button>
      </div>
    </div>
  );
}

export default Card;
