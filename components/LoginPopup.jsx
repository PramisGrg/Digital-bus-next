"use client";
import React, { useState } from "react";
import axiosInstance from "@/services/axios";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

function LoginPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [state, setState] = useState({
    phoneNumber: "",
    password: "",
  });
  const router = useRouter();

  const handleStateChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleLoginForm = async (e) => {
    // Renamed function to handleSubmit
    e.preventDefault();
    const userData = {
      phoneNumber: state.phoneNumber,
      password: state.password,
    };
    try {
      const response = await axiosInstance.post("/auth/login/", userData);
      console.log(response);

      if (response?.status === 200) {
        setCookie("token", response?.data?.token, { maxAge: 60 * 60 * 24 });
        setCookie("role", response?.data?.role, { maxAge: 60 * 60 * 24 });

        router.push("/dashboard/user-dashboard");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
      setState({ phoneNumber: "", password: "" });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">User Login</h2>
          <p>Login to your account</p>
        </div>
        <form onSubmit={handleLoginForm}>
          <div className="mt-4">
            <input
              type="tel"
              placeholder="Phone number"
              className="border border-gray-400 py-2 px-4 w-full rounded"
              onChange={handleStateChange}
              name="phoneNumber"
            ></input>
          </div>
          <div className="mt-4">
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-400 py-2 px-4 w-full rounded"
              onChange={handleStateChange}
              name="password"
            ></input>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-[#1c3c59] hover:bg-[#316da5] text-white font-bold py-2 px-4 rounded-full"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link href="user-register" className="text-[#443c67] font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPopup;
