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
        console.log(response?.data);
        setState(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfo();
  }, []);

  return (
    <div>
      <h1>{state?.data?.username}</h1>
    </div>
  );
};

export default page;
