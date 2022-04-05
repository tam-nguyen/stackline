import React from "react";
import RetailSale from "./retailSale";
import Report from "./report";
import "./style.css";

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-inner">
        <RetailSale />
      </div>
      <div className="right-sidebar-inner">
        <Report />
      </div>
    </div>
  );
}
