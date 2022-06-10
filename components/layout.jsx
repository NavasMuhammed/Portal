import React from "react";
import Topbar from "./topBar";
import TopBarNav from "./topBarNavigation";

const Layout = ({ children }) => {
  return (
    <div className="tabs">
      <Topbar />
      <TopBarNav />
      <div className="mainBody">{children}</div>
    </div>
  );
};

export default Layout;
