import React from "react";
import { PortalIcons } from "../icons";
import { TopbarIconsData } from "./data";
const Topbar = () => {
  const [selectedId, setSelectedId] = React.useState();
  function handleSelect(index) {
    setSelectedId(index);
  }
  return (
    <>
      <div className="tab">
        <div className="topbar">
          <span className="header">Portal</span>
          <div className="icons">
            {TopbarIconsData.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    handleSelect(item.id);
                  }}
                  key={index}
                >
                  <PortalIcons
                    icon={item.icon}
                    selected={selectedId === item.id}
                  ></PortalIcons>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
