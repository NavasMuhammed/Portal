import React from "react";
import summary from "../../../../assets/icons/summary.svg";
import status from "../../../../assets/icons/status.svg";
import transaction from "../../../../assets/icons/transaction.svg";
import financial from "../../../../assets/icons/financial.svg";
import external from "../../../../assets/icons/external.svg";
import compliance from "../../../../assets/icons/compliance.svg";
import research from "../../../../assets/icons/research.svg";
import cover from "../../../../assets/icons/cover.svg";
import trade from "../../../../assets/icons/trade.svg";
import rating from "../../../../assets/icons/rating.svg";
import signoff from "../../../../assets/icons/signoff.svg";
import Image from "next/image";
function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="items">
        <div className="item">
          <Image src={summary} alt="summary icon" />
          <span>Summary</span>
        </div>
        <div className="item">
          <Image src={status} alt=" icon" />

          <span>Status</span>
        </div>
        <div className="item">
          <Image src={transaction} alt=" icon" />

          <span>Transaction</span>
        </div>
        <div className="item">
          <Image src={financial} alt=" icon" />

          <span>Financials</span>
        </div>
        <div className="item">
          <Image src={external} alt=" icon" />

          <span>External Reports</span>
        </div>
        <div className="item">
          <Image src={compliance} alt=" icon" />

          <span>Compliance</span>
        </div>
        <div className="item">
          <Image src={research} alt=" icon" />

          <span>Research & Sentiment</span>
        </div>
        <div className="item">
          <Image src={cover} alt=" icon" />

          <span>Cover</span>
        </div>
        <div className="item">
          <Image src={trade} alt=" icon" />

          <span>Trade Documents</span>
        </div>
        <div className="item">
          <Image src={rating} alt=" icon" />

          <span>Rating</span>
        </div>
        <div className="item">
          <Image src={signoff} alt=" icon" />

          <span>sign Off</span>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
