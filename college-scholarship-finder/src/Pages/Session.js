// Session.js

import React, { useState } from 'react';
import './Session.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Session = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [isSessionScheduled, setIsSessionScheduled] = useState(false);

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    // Add more time slots as needed
  ];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeSlotSelection = (slot) => {
    setSelectedTimeSlot(slot);
  };

  const handleSessionBooking = () => {
    // Here, you can send a request to your backend to book the session
    // After the session is successfully booked, set isSessionScheduled to true
    setIsSessionScheduled(true);
  };

  return (
    <>
      <Navbar/>
      <div className="session-container">
        {!isSessionScheduled ? (
          <div>
            <h2>Schedule a Session</h2>
            <div className="date-picker">
              <label htmlFor="date">Select Date:</label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="time-slots">
              <h3>Select a Time Slot:</h3>
              <ul>
                {timeSlots.map((slot, index) => (
                  <li
                    key={index}
                    onClick={() => handleTimeSlotSelection(slot)}
                    className={slot === selectedTimeSlot ? "selected" : ""}
                  >
                    {slot}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={handleSessionBooking}>Book Session</button>
          </div>
        ) : (
          <div className="session-scheduled">
            <h2>Your Session is Scheduled</h2>
            <p>You have successfully scheduled a session for:</p>
            <p>Date: {selectedDate}</p>
            <p>Time Slot: {selectedTimeSlot}</p>
            <p>
              You will receive a google meet link 30 min before your slot via
              email.
            </p>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default Session;
