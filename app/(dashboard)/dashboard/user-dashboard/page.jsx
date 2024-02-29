"use client";
import { axiosAuthInstance } from "@/services/axios";
import { useEffect, useState } from "react";
import React from "react";
import UserProfile from "@/assets/images/UserProfile.jpeg";
import Image from "next/image";
import { useContext, createContext } from "react";

const GlobalContext = createContext();

const page = () => {
  const [state, setState] = useState(" ");

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosAuthInstance.get("/user/info");
        console.log(response);
        setState(response?.data?.data);
        //   const userID = response?.data?.data?._id;
        //   const params = new URLSearchParams(window.location.search);
        //   params.set("userID", userID);
        //   // const newUrl = `${window.location.pathname}?${params.toString()}`;
        //   // window.location.href = newUrl;
        //   window.location.href =
        //     "/dashboard/user-dashboard/payment?" + params.toString();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <div className="flex">
        <div>
          <Image src={UserProfile} height={30} width={30} alt="user profile" />
        </div>
        <div className="pl-4 pt-1 font-bold">{state.username}</div>
      </div>
      <div className="mt-1">{state._id}</div>
      <div className="h-40 shadow-lg rounded-xl flex flex-col justify-between w-fit mx-36 mt-36">
        <div className="text-gray-400 ml-4 mt-6 mr-48 text-xl">Amount :</div>
        <div className="ml-4 text-5xl mb-10">Rs {state.amount}</div>
      </div>
    </div>
  );
};

export default page;

export const GlobalContextProvider = ({ children }) => {
  const userID = "Pramis";

  return (
    <GlobalContext.Provider value="pramis">{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
