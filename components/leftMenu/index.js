import React from "react";
import { SidebarData } from "./data";
import { PortalIcons } from "./icons";
import { useRouter } from "next/router";
import Progress from "./progressbar";

export default function LeftMenu() {
  const router = useRouter();

  return (
    <div className="leftMenu">
      <div className="items">
        {SidebarData.map((item, index) => {
          return (
            <div
              onClick={(e) => {
                e.preventDefault();
                router.push(item.path);
              }}
              key={index}
              className="item"
            >
              <PortalIcons
                icon={item.title}
                selected={router.asPath === item.path}
              />
              <span className={router.asPath === item.path ? "selected" : ""}>
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
      <div className="progressBox">
        <Progress done="27"/>
      </div>
    </div>
  );
}
