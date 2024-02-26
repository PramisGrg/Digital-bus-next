// "use client";
// import axiosInstance, { axiosAuthInstance } from "@/services/axios";
// import React from "react";
// import UserData from "@/components/admin-dashboard/UserData";

// const page = async () => {
//   const response = await axiosAuthInstance.get("/user/info");
//   console.log(response.data.data);
//   return (
//     <div className="flex-none">
//       <h1 className="text-4xl">Admin</h1>
//       {/* <UserData response={response.data.data} /> */}
//     </div>
//   );
// };

// export default page;

"use client";
import axiosInstance, { axiosAuthInstance } from "@/services/axios";
import { useEffect } from "react";
import React from "react";

const page = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosAuthInstance.get("/user/info");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>This</h1>
    </div>
  );
};

export default page;
