"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import BusStation from "@/assets/images/insidethebus.jpeg";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [state, setState] = useState({
    busNumber: "",
    busType: "",
    busRoute: "",
    busSeats: "",
  });
  const router = useRouter();
  const handleStateChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const userData = {
      busNumber: state.busNumber,
      busType: state.busType,
      busRoute: state.busRoute,
      busSeats: state.busSeats,
    };
    console.log(userData);
    try {
      const response = await axios.post(
        "https://sahaj-yatra-api.onrender.com/api/v1/bus",
        userData
      );

      if (response?.status === 201) {
        toast.success(response?.data?.message, {
          onClose: () => {
            router.push("/dashboard/admin-dashboard/");
          },
        });
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error(error?.response?.data?.error);
      } else if (error?.response?.status === 409) {
        toast.error(error?.response?.data?.error);
      }
      console.log("registration failed: ", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="p-20 rounded-2xl bg-violet-400">
        <h2 className="text-3xl mb-10">Bus Registration</h2>
        <p className="mb-6">
          Create your account. It’s free and only take a minute
        </p>
        <form onSubmit={handleSubmitForm}>
          <div>
            <input
              type="text"
              placeholder="Bus Number"
              className="rounded-md w-full border border-gray-400 p-2 mr-2"
              onChange={handleStateChange}
              name="busNumber"
            ></input>
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Bus Type"
              className=" rounded-md border border-gray-400 p-2 w-full"
              onChange={handleStateChange}
              name="busType"
            ></input>
          </div>

          <div className="mt-5">
            <input
              type="text"
              placeholder="Bus Route"
              busRoute
              className="rounded-md border border-gray-400 p-2 w-full"
              onChange={handleStateChange}
              name="busRoute"
            ></input>
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Bus Seats"
              className="rounded-md border border-gray-400 p-2 w-full"
              onChange={handleStateChange}
              name="busSeats"
            ></input>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded-md items-center my-2 hover:scale-105 duration-300"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
