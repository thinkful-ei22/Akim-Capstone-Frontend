import React from "react";
import { connect } from "react-redux";

import { saveStatPoints } from "../../actions/player-stat-actions";
import { setNewEnemy } from "../../actions/enemy-stat-actions";
import { changePage } from "../../actions/game-actions";
import StatsAllocator from "../stats-allocator";

class VictoryPage extends React.Component {
  componentDidMount() {
    this.props.setNewEnemy();
  }
  render() {
    return (
      <main>
        <strong>YOU WIN!</strong>

        <p>Your experience in battle has made you stronger!</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.saveStatPoints();
            this.props.changePage("battle");
          }}
        >
          <StatsAllocator />
          <button name="save-and-descend" type="submit">
            Save and Descend
          </button>
        </form>
      </main>
    );
  }
}

export default connect(
  null,
  { saveStatPoints, changePage, setNewEnemy }
)(VictoryPage);
