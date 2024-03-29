"use client";
import { axiosAuthInstance } from "@/services/axios";
import { useEffect, useState } from "react";
import React from "react";
import UserProfile from "@/assets/images/UserProfile.jpeg";
import Image from "next/image";
import PieChartPage from "@/components/pieChart";
// const GlobalContext = createContext();

// export const GlobalContextProvider = ({ children }) => {
//   const [data, setData] = useState(" ");
//   useEffect(() => {
//     (async () => {
//       try {
//         const response = await axiosAuthInstance.get("/user/info");
//         console.log(response?.data?.data?._id);
//         setData(response?.data?.data?._id);
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }, []);

//   return (
//     <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
//   );
// };
// export const useGlobalContext = () => useContext(GlobalContext);

const Page = () => {
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
    <div className="flex">
      {/* Left side content */}
      <div className="flex flex-col mr-4">
        <div className="flex">
          <div>
            <Image
              src={UserProfile}
              height={30}
              width={30}
              alt="user profile"
            />
          </div>
          <div className="pl-4 pt-1 font-bold">{state.username}</div>
        </div>
        <div className="mt-1">{state._id}</div>
        <div className="h-40 shadow-lg rounded-xl flex flex-col justify-between w-fit mt-36">
          <div className="text-gray-400 ml-4 mt-6 mr-48 text-xl">Amount :</div>
          <div className="ml-4 text-5xl mb-10">Rs {state.amount}</div>
        </div>
      </div>

      <div className="ml-72">
        <PieChartPage />
      </div>
    </div>
  );
};

export default Page;
