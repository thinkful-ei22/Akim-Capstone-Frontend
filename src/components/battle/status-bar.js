import React from "react";
import "./status-bar.css";

export default function(props) {
  return (
    <aside role="section">
      <strong className="stat-item">{props.name}</strong>
      <strong className="stat-item">HP : {props.hp}</strong>
      <strong className="stat-item">ATK : {props.attack}</strong>
      <strong className="stat-item">DEF :{props.defense}</strong>
    </aside>
  );
}
