"use client";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [RFID, setRFID] = useState({
    rfidNumber: "",
  });

  const handleRFIDChange = (e) => {
    // Corrected the target name from 'e.target.rfidNumber' to 'e.target.name'
    setRFID({ ...RFID, [e.target.name]: e.target.value });
  };

  const handleRFID = async (e) => {
    e.preventDefault();
    const data = {
      rfidNumber: RFID.rfidNumber,
    };
    try {
      // I assume you have a 'userID' variable defined elsewhere in your component
      const response = await axios.post(
        `https://sahaj-yatra-api.onrender.com/api/v1/user/${userID}/verify`,
        data
      );
      console.log(response);
      // Call a function or perform any necessary actions after successful verification
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        name="rfidNumber"
        onChange={handleRFIDChange}
        placeholder="Enter the RFID number"
      />
      <button onClick={handleRFID}>Verify</button>
    </div>
  );
};

export default page;
