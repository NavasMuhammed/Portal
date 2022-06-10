import React from "react";
import { useRouter } from "next/router";
import { TopbarData } from "./data";
function TopBarNav() {
  const router = useRouter();
  return (
    <div className="topbarLower">
      <div className="contents">
        {TopbarData.map((item, index) => {
          return (
            <div
              onClick={(e) => {
                e.preventDefault();
                router.push(item.path);
              }}
              key={index}
            >
              <span
                className={
                  router.asPath === item.path ? "content selected" : "content"
                }
              >
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopBarNav;
