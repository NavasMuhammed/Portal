import React from "react";
import Topbar from "./topBar";

const Layout = ({ children }) => {
  return (
    <div className="tabs">
      <Topbar />
      <div className="mainBody">{children}</div>
    </div>
  );
};

export default Layout;
