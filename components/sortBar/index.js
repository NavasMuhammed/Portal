import React from "react";
import Link from "next/link";
import { SortbarData } from "./data";
function SortBarNav() {
  const [selectedId, setSelectedId] = React.useState();
  function handleSelect(index) {
    setSelectedId(index);
  }
  return (
    <div className="sortBox">
      {SortbarData.map((item, index) => {
        return (
          <div
            className="sortitem"
            onClick={() => {
              handleSelect(item.id);
            }}
            key={index}
          >
            <span
              className={
                selectedId === item.id ? "sortBoxItem selected" : "sortBoxItem"
              }
            >
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default SortBarNav;
