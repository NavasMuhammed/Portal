import React from "react";
import Link from "next/link";
import { SidebarData } from "./data";
import { PortalIcons } from "./icons";

export default function LeftMenu() {
  const [selectedId, setSelectedId] = React.useState(1);
  console.log(selectedId);
  const handleSelect = (index) => {
    setSelectedId(index);
  };
  return (
    <div className="leftMenu">
      <div className="items">
        {SidebarData.map((item, index) => {
          return (
            <Link href={item.path}>
              <div
                onClick={() => {
                  handleSelect(item.id);
                }}
                key={index}
                className="item"
              >
                <PortalIcons
                  icon={item.title}
                  selected={selectedId === item.id}
                />
                <span className={selectedId === item.id ? "selected" : ""}>
                  {item.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      {/* <div className="items">
        <div className="item">
          <Summary selected={selected} />
          <span>Summary</span>
        </div>

        <div className="item">
          <Status selected={selected} />

          <span>Status</span>
        </div>
        <div className="item">
          <Transaction selected={true} />

          <span>Transaction</span>
        </div>
        <div className="item">
          <Financials selected={selected} />

          <span>Financials</span>
        </div>
        <div className="item">
          <External selected={selected} />

          <span>External Reports</span>
        </div>
        <div className="item">
          <Compliance selected={selected} />

          <span>Compliance</span>
        </div>
        <div className="item">
          <Research selected={selected} />

          <span>Research & Sentiment</span>
        </div>
        <div className="item">
          <Cover selected={selected} />

          <span>Cover</span>
        </div>
        <div className="item">
          <Trade selected={selected} />

          <span>Trade Documents</span>
        </div>
        <div className="item">
          <Rating selected={selected} />
          <span>Rating</span>
        </div>
        <div className="item">
          <Signoff selected={selected} />

          <span>sign Off</span>
        </div>
      </div> */}
    </div>
  );
}
