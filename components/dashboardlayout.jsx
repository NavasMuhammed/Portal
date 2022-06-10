import React from "react";
import LeftMenu from "./leftMenu";
import Layout from "./layout";
const DashBoardLayout = ({ children }) => {
  return (
    <Layout>
      <LeftMenu></LeftMenu>
      <div className="mainBody">{children}</div>
    </Layout>
  );
};

export default DashBoardLayout;
