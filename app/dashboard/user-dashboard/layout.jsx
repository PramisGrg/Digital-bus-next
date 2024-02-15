import React from "react";
import Sidebar from "@/app/ui/Sidebar-User";
import { ToastContainer } from "react-toastify";

const layout = ({ children }) => {
  return (
    <div className="flex bg-violet-200">
      <div className="bg-blue-100">
        <Sidebar />
      </div>
      <div className="w-full p-5">{children}</div>
    </div>
  );
};

export default layout;
