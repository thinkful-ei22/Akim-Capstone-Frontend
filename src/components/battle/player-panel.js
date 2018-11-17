import React from "react";
import StatusBar from "./status-bar";

class PlayerPanel extends React.Component {
  render() {
    return (
      <div>
        <StatusBar
          name={this.props.player.playerName}
          hp={this.props.player.hitpoints}
          attack={this.props.player.baseAttack}
          defense={this.props.player.baseDefense}
        />
        <div className>
          <button
            name="rock"
            className="battle-button"
            onClick={() => this.calculateWinner("Rock")}
          >
            ROCK
          </button>
          <button
            name="paper"
            className="battle-button"
            onClick={() => this.calculateWinner("Paper")}
          >
            PAPER
          </button>
          <button
            name="scissors"
            className="battle-button"
            onClick={() => this.calculateWinner("Scissors")}
          >
            SCISSORS
          </button>
        </div>
      </div>
    );
  }
}
