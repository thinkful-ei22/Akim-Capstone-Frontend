import React from "react";
import { connect } from "react-redux";
import { changePage } from "../actions/game-actions";
import { grantPlayerStatPoints } from "../actions/player-stat-actions";

function MainMenu(props) {
  return (
    <main role="main">
      <h1>
        <p>Prepare to delve...</p>
        <br />
        <strong>INTO THE MAW</strong>
      </h1>
      <button
        name="start-button"
        onClick={e => {
          props.changePage("character");
          props.grantPlayerStatPoints(20);
        }}
        autoFocus
      >
        Start Game
      </button>
    </main>
  );
}
export default connect(
  null,
  { changePage, grantPlayerStatPoints }
)(MainMenu);
