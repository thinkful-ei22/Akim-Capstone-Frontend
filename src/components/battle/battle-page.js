import React from "react";
import { connect } from "react-redux";

import {
  playerChooses,
  dealDamagePlayer,
  dealDamageEnemy,
  logTie
} from "../../actions/battle-actions";
import { changePage } from "../../actions/game-actions";
import StatusBar from "./status-bar";
import CombatLog from "./combat-log";
import identifyLoser from "../../selectors/loser-selector";

class BattlePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.terminateBattleSequence();
  }

  terminateBattleSequence() {
    if (this.props.player.hitpoints <= 0) {
      this.props.changePage("death");
    }
    if (this.props.enemy.hitpoints <= 0) {
      this.props.changePage("victory");
    }
  }

  calculateWinner(guess) {
    const { player, enemy } = this.props;
    const result = identifyLoser(guess, player, enemy);
    console.log(result);
    switch (result.loser) {
      case "player":
        this.props.dealDamagePlayer(result);
        break;
      case "enemy":
        this.props.dealDamageEnemy(result);
        break;
      case "tie":
        this.props.logTie(result.enemyChoice);
    }
  }
  render() {
    return (
      <main>
        <div>
          <StatusBar
            name={this.props.enemy.enemyName}
            hp={this.props.enemy.hitpoints}
            attack={this.props.enemy.baseAttack}
            defense={this.props.enemy.baseDefense}
          />
        </div>
        <div>
          {" "}
          <CombatLog />
        </div>
        <div>
          <StatusBar
            name={this.props.player.playerName}
            hp={this.props.player.hitpoints}
            attack={this.props.player.baseAttack}
            defense={this.props.player.baseDefense}
          />
          <button name="rock" onClick={() => this.calculateWinner("Rock")}>
            ROCK
          </button>
          <button name="paper" onClick={() => this.calculateWinner("Paper")}>
            PAPER
          </button>
          <button
            name="scissors"
            onClick={() => this.calculateWinner("Scissors")}
          >
            SCISSORS
          </button>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  player: state.battle.player,
  enemy: state.battle.enemy
});
export default connect(
  mapStateToProps,
  { playerChooses, dealDamagePlayer, dealDamageEnemy, logTie, changePage }
)(BattlePage);
