"use client";

import React, { FormEvent, use, useState } from "react";
import Image from "next/image";
import BusStation from "@/assets/images/insidethebus.jpeg";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Link from "next/link";
import NavbarNew from "@/components/NavbarNew";
import axiosInstance from "@/services/axios";

export default function Home() {
  const [state, setState] = useState({
    phoneNumber: "",
    password: "",
  });
  const router = useRouter();
  const handleStateChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleLoginForm = async (e) => {
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
    <>
      <ToastContainer />
      <NavbarNew />
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
              <h2 className="text-3xl mb-4">User Login</h2>
              <p className="mb-4">Login to your account</p>
              <form onSubmit={handleLoginForm}>
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
                    className="w-full  bg-[#1c3c59] hover:bg-[#316da5] text-white font-bold py-2 px-4 rounded-2xl"
                  >
                    Login
                  </button>
                  <p className="flex justify-center py-2 px-4 mt-3 items-center">
                    Don't have an account!
                    <Link
                      className="hover:text-[#443c67] font-bold ml-2"
                      href="user-register"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
    // <>
    //   <ToastContainer />
    //   <NavbarNew />
    //   <section className="min-h-screen py-20 bg-[#e8edf0]">
    //     <div className="container mx-auto flex items-center justify-center">
    //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
    //         <div className="flex justify-center items-center py-16 lg:p-12 bg-no-repeat bg-cover bg-center">
    //           <Image
    //             width={1000}
    //             height={1000}
    //             alt="Sajha Bus"
    //             src={BusStation}
    //           />
    //         </div>
    //         <div className="flex flex-col justify-center p-8 lg:p-12">
    //           <h2 className="text-3xl mb-4 font-bold">User Login</h2>
    //           <p className="text-lg mb-6">Login to your account</p>
    //           <form onSubmit={handleLoginForm}>
    //             <div className="mb-4">
    //               <input
    //                 type="tel"
    //                 placeholder="Phone number"
    //                 className="border border-gray-400 py-2 px-4 w-full rounded"
    //                 onChange={handleStateChange}
    //                 name="phoneNumber"
    //               />
    //             </div>
    //             <div className="mb-6">
    //               <input
    //                 type="password"
    //                 placeholder="Password"
    //                 className="border border-gray-400 py-2 px-4 w-full rounded"
    //                 onChange={handleStateChange}
    //                 name="password"
    //               />
    //             </div>
    //             <div className="mb-8">
    //               <button
    //                 type="submit"
    //                 className="bg-blue-600 text-white hover:bg-blue-400 font-bold py-2 px-6 rounded-full transition duration-300"
    //               >
    //                 Login
    //               </button>
    //             </div>
    //             <div className="text-center">
    //               <Link href="user-register">Register</Link>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
}
