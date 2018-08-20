import React from "react";
import "./status-bar.css";

export default function(props) {
  return (
    <aside role="section">
      <strong class="stat-item">{props.name}</strong>
      <strong class="stat-item">HP : {props.hp}</strong>
      <strong class="stat-item">ATK : {props.attack}</strong>
      <strong class="stat-item">DEF :{props.defense}</strong>
    </aside>
  );
}
