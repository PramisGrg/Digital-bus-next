import React from "react";
import Sidebar from "@/app/ui/Sidebar-Admin";

const layout = ({ children }) => {
  return (
    <div className="flex ">
      <div className=" bg-slate-700">
        <Sidebar />
      </div>
      <div className="flex">{children}</div>
    </div>
  );
};

export default layout;
