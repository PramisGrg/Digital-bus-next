import React from "react";
import Sidebar from "@/app/ui/Sidebar-User";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full p-5">{children}</div>
    </div>
  );
};

export default layout;
