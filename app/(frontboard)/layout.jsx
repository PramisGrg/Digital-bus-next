import React from "react";
import NavbarNew from "../../components/NavbarNew";

const layout = ({ children }) => {
  return (
    <section>
      <NavbarNew />
      <div>{children}</div>
    </section>
  );
};

export default layout;
