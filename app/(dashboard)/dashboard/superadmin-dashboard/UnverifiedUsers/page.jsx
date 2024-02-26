"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePathname, useSearchParams } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  const [unverified, setUnverified] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sahaj-yatra-api.onrender.com/api/v1/user/unverified"
        );
        const list = response?.data?.data;
        setUnverified(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const Handlebtn = (userID) => {
    console.log(userID);
    const params = new URLSearchParams(window.location.search);
    params.set("userID", userID);
    window.location.href =
      "/dashboard/superadmin-dashboard/UnverifiedUsers/Popup?" +
      params.toString();
  };
  // try{
  //   const response = await axios.post(
  //     `https://sahaj-yatra-api.onrender.com/api/v1/user/${userID}/verify/`
  //   );
  //   console.log(response);
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Unverified Users</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border w-full">
          <thead>
            <tr className="py-4 bg-blue-400">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone Number</th>
              <th className="px-8 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {unverified.map((user) => (
              <tr className="bg-blue-200" key={user.id}>
                <td className="border px-6 py-3">{user.username}</td>
                <td className="border px-6 py-3">{user.email}</td>
                <td className="border px-6 py-3">{user.phoneNumber}</td>
                <td className="border px-6 py-3">
                  <button
                    className=" bg-blue-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300"
                    onClick={() => Handlebtn(user._id)}
                  >
                    Verify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
