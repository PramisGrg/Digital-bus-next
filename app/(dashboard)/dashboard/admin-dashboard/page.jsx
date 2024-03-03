"use client";
import { axiosAuthInstance } from "@/services/axios";
import { useEffect, useState } from "react";
import React from "react";
import UserProfile from "@/assets/images/UserProfile.jpeg";
import Image from "next/image";
import BarChartComponent from "@/components/BarChartComponent";

const page = () => {
  const [state, setState] = useState(" ");
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosAuthInstance.get("/user/info");
        console.log(response);
        setState(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className=" flex-grow w-screen flex flex-col">
      <div className=" flex mt-5 ml-5">
        <div>
          <Image src={UserProfile} height={30} width={30} alt="user profile" />
        </div>
        <div className="pl-4 pt-1 font-bold">{state.username}</div>
      </div>
      <div className="">
        <BarChartComponent />
      </div>
    </div>
  );
};

export default page;
