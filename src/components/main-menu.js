import React from "react";
import { connect } from "react-redux";
import { changePage } from "../actions/game-actions";

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
        onClick={e => props.changePage("character")}
        autoFocus
      >
        Start Game
      </button>
    </main>
  );
}
export default connect(
  null,
  { changePage }
)(MainMenu);
