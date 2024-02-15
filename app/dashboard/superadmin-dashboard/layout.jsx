import React from "react";
import Sidebar from "@/app/ui/Sidebar-superAdmin";

const layout = ({ children }) => {
  return (
    <div className=" flex bg-violet-200 ">
      <div className=" bg-blue-100">
        <Sidebar />
      </div>
      <div>
        <div className="flex h-screen pl-96">{children}</div>
      </div>
    </div>
  );
};

export default layout;
