"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { axiosAuthInstance } from "@/services/axios";

const page = () => {
  const [state, setState] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userIdParam = params.get("userID");
    console.log(userIdParam);
    const fetchInfo = async () => {
      try {
        const response = await axiosAuthInstance.get(`/user/${userIdParam}`);
        console.log(response?.data?.data);
        setState(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfo();
  }, []);

  return (
    <div className="my-6">
      <h1 className="pt-2 font-bold text-3xl">
        Full details of {state.username} :
      </h1>
      <div className="mt-6 flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-slate-300 p-4 rounded-md shadow-md">
            <p className="text-gray-900 font-semibold mb-2">Username:</p>
            <p className="text-gray-600">{state.username}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-slate-300 p-4 rounded-md shadow-md">
            <p className="text-gray-900 font-semibold mb-2">Amount:</p>
            <p className="text-gray-600">{state.amount}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-slate-300 p-4 rounded-md shadow-md">
            <p className="text-gray-900 font-semibold mb-2">Email:</p>
            <p className="text-gray-600">{state.email}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-slate-300 p-4 rounded-md shadow-md">
            <p className="text-gray-900 font-semibold mb-2">Phone Number:</p>
            <p className="text-gray-600">{state.phoneNumber}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-slate-300 p-4 rounded-md shadow-md">
            <p className="text-gray-900 font-semibold mb-2">
              Citizenship Number:
            </p>
            <p className="text-gray-600">{state.citizenshipNumber}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-slate-300 p-4 rounded-md shadow-md">
            <p className="text-gray-900 font-semibold mb-2">ID:</p>
            <p className="text-gray-600">{state._id}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-slate-300 p-4 rounded-md shadow-md">
            <p className="text-gray-900 font-semibold mb-2">RFID Number:</p>
            <p className="text-gray-600">{state.rfidNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
