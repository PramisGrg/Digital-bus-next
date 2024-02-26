"use client";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [RFID, setRFID] = useState({
    rfidNumber: "",
  });

  const handleRFIDChange = (e) => {
    setRFID({ ...RFID, [e.target.name]: e.target.value });
  };

  const handleRFID = async (e) => {
    e.preventDefault();
    const data = {
      rfidNumber: RFID.rfidNumber,
    };
    const params = new URLSearchParams(window.location.search);
    const userIdParam = params.get("userID");
    console.log(userIdParam);
    try {
      const response = await axios.post(
        `https://sahaj-yatra-api.onrender.com/api/v1/user/${userIdParam}/verify`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="flex flex-col" onSubmit={handleRFID}>
        <input
          className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 placeholder-gray-500 text-gray-900 focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          name="rfidNumber"
          onChange={handleRFIDChange}
          placeholder="Enter the RFID number"
        />
        <button
          className=" text-white bg-blue-400 transition-all duration-500 hover:bg-blue-700 px-3 py-2 rounded-md text-md cursor-pointer m-6 p-4"
          type="submit"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default page;
