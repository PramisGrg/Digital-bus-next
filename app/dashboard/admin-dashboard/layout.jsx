import React from "react";
import Sidebar from "@/app/ui/Sidebar-Admin";

const layout = ({ children }) => {
  return (
    <div className="bg-violet-200 flex">
      <div className=" bg-blue-100">
        <Sidebar />
      </div>
      <div className="pl-96 pt-24">{children}</div>
    </div>
  );
};

export default layout;
