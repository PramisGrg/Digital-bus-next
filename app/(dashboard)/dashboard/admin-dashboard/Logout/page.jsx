"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { axiosAuthInstance } from "@/services/axios";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = async () => {
    // Close the modal
    setShowModal(false);
    try {
      const response = await axiosAuthInstance.post("/auth/logout/");
      if (response.status === 200) {
        Cookies.remove("token");
        
        router.push("/admin-login");
      } else {
        setError("Failed to logout: " + response.data.message);
      }
    } catch (error) {
      setError("Error logging out: " + error.message);
    }
  };

  return (
    <div>
      <div className="pl-60 flex h-screen justify-center items-center">
        <h1 className="mr-8 font-bold text-xl">
          Agian click here to Admin Logout :{" "}
        </h1>
        <button
          onClick={handleLogout}
          className="bg-slate-900 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <div className="relative bg-white rounded-lg max-w-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Logout Confirmation</h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600">
                  Are you sure you want to log out?
                </p>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={confirmLogout}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <br />
        {/* {error && <div className="">{error}</div>} */}
      </div>
    </div>
  );
};

export default LogoutButton;
