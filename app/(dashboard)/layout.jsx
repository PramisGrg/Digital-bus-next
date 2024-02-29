import React from "react";
import { GlobalContextProvider } from "../../components/ContextApi";

const layout = ({ children }) => {
  return (
    <section>
      <div>{children}</div>
      {/* <GlobalContextProvider>{children}</GlobalContextProvider> */}
    </section>
  );
};

export default layout;
