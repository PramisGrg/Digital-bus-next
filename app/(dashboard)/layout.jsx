import React from "react";
import { GlobalContextProvider } from "./dashboard/user-dashboard/page";

const layout = ({ children }) => {
  return (
    <section>
      {/* <div>{children}</div> */}
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </section>
  );
};

export default layout;
