import React from "react";
import { connect } from "react-redux";

import { resetGame } from "../../actions/battle-actions";
import { changePage } from "../../actions/game-actions";

class DeathPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.resetGame();
  }
  render() {
    return (
      <main role="main">
        <strong>YOU HAVE DIED!</strong>

        <p>The goblins feast on your bones!</p>
        <button
          name="restart-game"
          type="button"
          onClick={() => this.props.changePage("")}
        >
          Restart
        </button>
      </main>
    );
  }
}

export default connect(
  null,
  { changePage, resetGame }
)(DeathPage);
