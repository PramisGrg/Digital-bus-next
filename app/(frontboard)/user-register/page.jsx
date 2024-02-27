"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import BusStation from "@/assets/images/insidethebus.jpeg";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axiosInstance from "@/services/axios";

export default function RegisterPage() {
  const [state, setState] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    citizenshipNumber: "",
    password: "",
  });
  const router = useRouter();
  const handleStateChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const userData = {
      username: state.username,
      email: state.email,
      phoneNumber: state.phoneNumber,
      citizenshipNumber: state.citizenshipNumber,
      password: state.password,
    };
    console.log(userData);
    try {
      const response = await axiosInstance.post("/auth/register/", userData);

      if (response?.status === 201) {
        toast.success(response?.data?.message, {
          onClose: () => {
            router.push("/");
          },
        });
      }
      //   const { token } = response.data;
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error(error?.response?.data?.message);
      } else if (error?.response?.status === 409) {
        toast.error(error?.response?.data?.message);
      }
      console.log("registration failed: ", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="min-h-screen py-20 bg-gradient-to-r from-sky-500 to-indigo-200 ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
              <Image
                width={1000}
                height={1000}
                alt="Sajha Bus"
                src={BusStation}
              />
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">User Register</h2>
              <p className="mb-4">
                Create your account. It’s free and only take a minute
              </p>
              <form onSubmit={handleSubmitForm}>
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full border border-gray-400 py-1 px-2 mr-2"
                    onChange={handleStateChange}
                    name="username"
                  ></input>
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full"
                    onChange={handleStateChange}
                    name="email"
                  ></input>
                </div>

                <div className="mt-5">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="border border-gray-400 py-1 px-2 w-full"
                    onChange={handleStateChange}
                    name="phoneNumber"
                  ></input>
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Citizenship number"
                    className="border border-gray-400 py-1 px-2 w-full"
                    onChange={handleStateChange}
                    name="citizenshipNumber"
                  ></input>
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                    onChange={handleStateChange}
                    name="password"
                  ></input>
                </div>
                <div className="mt-5">
                  <input
                    type="checkbox"
                    className="border border-gray-400"
                  ></input>
                </div>

                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300"
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
