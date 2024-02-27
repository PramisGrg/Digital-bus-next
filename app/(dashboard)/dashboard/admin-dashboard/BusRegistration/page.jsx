"use client";
import React, { useState } from "react";
import axiosInstance, { axiosAuthInstance } from "@/services/axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const [state, setState] = useState({
    busNumber: "",
    busType: "",
    busRoute: "",
    busSeats: "",
    busOwner: "",
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
      busOwner: state.busOwner,
    };
    console.log(userData);
    try {
      const response = await axiosAuthInstance.post("/bus", userData);

      if (response?.status === 201) {
        toast.success(response?.data?.message, {
          onClose: () => {
            router.push("/dashboard/admin-dashboard/");
          },
        });
      }
    } catch (error) {
      console.log(error);
      console.log("registration failed: ", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="pl-96 flex h-screen items-center justify-center">
        <div className="p-20 rounded-2xl bg-slate-500">
          <h2 className="text-4xl mb-8 font-bold text-white">
            Bus Registration
          </h2>
          <p className="text-white mb-4">
            Register your Bus and become the partner of Sahaj Yatri
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
              <input
                type="text"
                placeholder="Bus Owner"
                className="rounded-md border border-gray-400 p-2 w-full"
                onChange={handleStateChange}
                name="busOwner"
              ></input>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-slate-900 text-white hover:text-black hover:bg-slate-400 font-bold py-2 px-4 mt-3 rounded-md items-center my-2 hover:scale-105 duration-300"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
