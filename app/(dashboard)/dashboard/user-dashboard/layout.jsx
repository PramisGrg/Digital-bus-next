import React from "react";
import Sidebar from "@/app/ui/Sidebar-User";
import { ToastContainer } from "react-toastify";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className=" bg-slate-700 ">
        <Sidebar />
      </div>
      <div className="p-5 ">{children}</div>
    </div>
  );
};

export default layout;
