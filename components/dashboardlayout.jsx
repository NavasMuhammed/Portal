import React from "react";
import LeftMenu from "./leftMenu";
import Layout from "./layout";
const DashBoardLayout = ({ children, selectedId, setSelectedId }) => {
  return (
    <Layout>
      <LeftMenu
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      ></LeftMenu>
      <div className="mainBody">{children}</div>
    </Layout>
  );
};

export default DashBoardLayout;
