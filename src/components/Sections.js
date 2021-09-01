import React from "react";
import "./Sections.css";
function Sections({ Icon, title, color, selected }) {
  return (
    <div
      className={`sections ${selected && "section__selected"}`}
      style={{
        borderBottom: `${selected && `1px solid ${color}`}`,
        color: `${selected ? color : "gray"} `,
      }}
    >
      <Icon></Icon>
      <p>{title}</p>
    </div>
  );
}

export default Sections;
