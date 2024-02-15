"use client";
import React, { useState } from "react";
import axios from "axios";

const RfID = ({ userID, onClose }) => {
  const [RFID, setRFID] = useState({
    rfidNumber: "",
  });

  const handleRFIDchange = (e) => {
    setRFID({ ...RFID, [e.target.rfidNumber]: e.target.value });
  };

  const handleRFID = async (e) => {
    e.preventDefault();
    const data = {
      rfidNumber: RfID.rfidNumber,
    };
    try {
      const response = await axios.post(
        `https://sahaj-yatra-api.onrender.com/api/v1/user/${userID}/verify`,
        data
      );
      console.log(response);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        name="rfidNumber"
        onChange={handleRFIDchange}
        placeholder="Enter the RFID number "
      ></input>
      <button onClick={handleRFID}></button>
    </div>
  );
};

export default RfID;
