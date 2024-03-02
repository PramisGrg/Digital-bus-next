"use client";

import React, { FormEvent, use, useState } from "react";
import axios from "axios";
import Image from "next/image";
import BusStation from "@/assets/images/insidethebus.jpeg";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Link from "next/link";
import axiosInstance from "@/services/axios";
import { getCookie } from "cookies-next";

export default function Home() {
  const [state, setState] = useState({
    phoneNumber: "",
    password: "",
  });
  const router = useRouter();
  const handleStateChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  console.log(getCookie("token"));

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const userData = {
      phoneNumber: state.phoneNumber,
      password: state.password,
    };
    try {
      const response = await axiosInstance.post("/auth/login/admin", userData);

      if (response?.status === 200) {
        setCookie("token", response?.data?.token, { maxAge: 60 * 60 * 24 });
        setCookie("role", response?.data?.role, { maxAge: 60 * 60 * 24 });
        router.push("/dashboard/admin-dashboard");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);

      console.log("registration failed: ", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="min-h-screen py-20 bg-gradient-to-r from-sky-500 to-indigo-200 ">
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
              <h2 className="text-3xl mb-4">BusOwner Login</h2>
              <p className="mb-4">Login to your account</p>
              <form onSubmit={handleLoginForm}>
                <div className="mt-5">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="border  border-gray-400 py-1 px-2 w-full"
                    onChange={handleStateChange}
                    name="phoneNumber"
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
                    className="w-full bg-blue-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center w-full bg-blue-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300">
                  <Link classname="text-center" href="/admin-register">
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
