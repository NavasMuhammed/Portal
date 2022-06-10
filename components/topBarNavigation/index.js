import React from "react";
import Link from "next/link";
import { TopbarData } from "./data";
function TopBarNav() {
  const [selectedId, setSelectedId] = React.useState(1);
  function handleSelect(index) {
    setSelectedId(index);
  }
  return (
    <div className="topbarLower">
      <div className="contents">
        {TopbarData.map((item, index) => {
          return (
            <Link href={item.path}>
              <div
                onClick={() => {
                  handleSelect(item.id);
                }}
                key={index}
              >
                <span
                  className={
                    selectedId === item.id ? "content selected" : "content"
                  }
                >
                  {item.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TopBarNav;
