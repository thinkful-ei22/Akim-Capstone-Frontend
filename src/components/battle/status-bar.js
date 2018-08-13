import React from "react";

export default function(props) {
  return (
    <aside role="section">
      <strong>{props.name}</strong>
      <strong>HP : {props.hp}</strong>
      <strong>ATK : {props.attack}</strong>
      <strong>DEF :{props.defense}</strong>
    </aside>
  );
}
