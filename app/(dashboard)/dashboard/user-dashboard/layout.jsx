import React from "react";
import Sidebar from "@/app/ui/Sidebar-User";
import { GlobalContextProvider } from "@/components/ContextApi";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className=" bg-slate-700 ">
        <Sidebar />
      </div>
      <div className="p-5">
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </div>
    </div>
  );
};

export default layout;
