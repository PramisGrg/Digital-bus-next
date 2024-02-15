"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
  const [verified, setVerified] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sahaj-yatra-api.onrender.com/api/v1/user/verified"
        );
        const list = response?.data;
        setVerified(list);
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
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone Number</th>
              <th className="px-8 py-4">Amount</th>
              <th className="px-8 py-4">RFID Number</th>
            </tr>
          </thead>
          <tbody>
            {verified.map((user) => (
              <tr className="bg-blue-200" key={user.id}>
                <td className="border px-6 py-3">{user.username}</td>
                <td className="border px-6 py-3">{user.email}</td>
                <td className="border px-6 py-3">{user.phoneNumber}</td>
                <td className="border px-6 py-3">{user.amount}</td>
                <td className="border px-6 py-3">{user.rfidNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
