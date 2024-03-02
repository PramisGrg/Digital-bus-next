import React from "react";
import Sidebar from "@/app/ui/Sidebar-User";

const layout = ({ children }) => {
  return (
    <div className="flex bg-[#e8edf0]">
      <div className=" bg-[#17324b] ">
        <Sidebar />
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default layout;
