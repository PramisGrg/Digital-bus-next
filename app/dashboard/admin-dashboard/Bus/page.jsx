"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
  const [bus, setBus] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sahaj-yatra-api.onrender.com/api/v1/bus"
        );
        const busList = response?.data?.data;
        setBus(busList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Unverified Users</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border w-full">
          <thead>
            <tr className="py-4 bg-blue-400">
              <th className="px-6 py-4">Bus Number</th>
              <th className="px-6 py-4">Bus Type</th>
              <th className="px-6 py-4">Bus Route</th>
              <th className="px-8 py-4">Bus Seats</th>
            </tr>
          </thead>
          <tbody>
            {bus.map((user) => (
              <tr className="bg-blue-200" key={user.id}>
                <td className="border px-6 py-3">{user.busNumber}</td>
                <td className="border px-6 py-3">{user.busType}</td>
                <td className="border px-6 py-3">{user.busRoute}</td>
                <td className="border px-6 py-3">{user.busSeats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
