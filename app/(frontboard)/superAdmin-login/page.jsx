"use client";

import React, { FormEvent, use, useState } from "react";
import axios from "axios";
import Image from "next/image";
import BusStation from "@/assets/images/Travelling_bus.jpeg";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Link from "next/link";

export default function Home() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleStateChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const userData = {
      email: state.email,
      password: state.password,
    };
    try {
      const response = await axios.post(
        "https://sahaj-yatra-api.onrender.com/api/v1/auth/login/superadmin",
        userData
      );

      if (response?.status === 200) {
        setCookie("token", response?.data?.token, { maxAge: 60 * 60 * 24 });
        setCookie("role", response?.data?.role, { maxAge: 60 * 60 * 24 });

        router.push("/dashboard/superadmin-dashboard");
      }
    } catch (error) {
      console.log(error?.response?.data?.error);
      toast.error(error?.response?.data?.error);
      setState(" ");
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="min-h-screen py-20 bg-[#e8edf0] ">
        <div className="container mx-auto">
          <div className="items-center flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
              <Image
                width={1000}
                height={1000}
                alt="Sajha Bus"
                src={BusStation}
              />
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">SuperAdmin Login</h2>
              <p className="mb-4">Login to your account</p>
              <form onSubmit={handleLoginForm}>
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
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full"
                    onChange={handleStateChange}
                    name="password"
                  ></input>
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full bg-[#1c3c59] text-white hover:bg-[#316da5] font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300"
                  >
                    Login
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
