import React from "react";
import "./SidebarOptions.css";
function SidebarOptions({ Icon, title, active }) {
  return (
    <div className="sidebarOptions">
      <Icon style={{ fontSize: 20, color: "gray" }} />
      <p className={active && "active"}>{title}</p>
    </div>
  );
}

export default SidebarOptions;
