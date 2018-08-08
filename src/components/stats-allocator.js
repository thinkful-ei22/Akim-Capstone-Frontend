import React from "react";
import { connect } from "react-redux";
import { allocatePoints } from "../actions/player-stat-actions";

class StatsAllocator extends React.Component {
  constructor(props) {
    super(props);
    this.attackValue = null;
    this.defenseValue = null;
    this.maximumPointInput =
      this.props.player.statPointsRemaining -
      (this.props.player.attackAllocated + this.props.player.defenseAllocated);
  }
  render() {
    return (
      <div>
        <fieldset>
          <legend>
            Allocate Stat Points :{" "}
            <span>
              {" "}
              {isNaN(this.props.player.statPointsRemaining)
                ? 0
                : this.props.player.statPointsRemaining}{" "}
            </span>
          </legend>
          <label htmlFor="attack-stat">Attack Points</label>
          <input
            name="attack-stat"
            type="number"
            id="attack-stat"
            defaultValue="0"
            min="0"
            max={this.maximumPointInput}
            ref={input => (this.attackValue = input)}
            onChange={e => {
              //consider adding some error handling here
              if (e.currentTarget.value <= this.maximumPointInput) {
                console.log(this.attackValue.value);
                this.props.dispatch(
                  allocatePoints(
                    parseInt(this.attackValue.value),
                    parseInt(this.defenseValue.value)
                  )
                );
              }
            }}
          />
          <span>
            {this.props.player.previousAttack} +{" "}
            {isNaN(this.props.player.attackAllocated)
              ? 0
              : this.props.player.attackAllocated}
          </span>
          <br />
          <label htmlFor="defense-stat">Defense Points</label>
          <input
            name="defense-stat"
            type="number"
            id="defense-stat"
            defaultValue="0"
            min="0"
            max={this.maximumPointInput}
            ref={input => (this.defenseValue = input)}
            onChange={e => {
              // consider adding some error handling here
              if (e.currentTarget.value <= this.maximumPointInput) {
                this.props.dispatch(
                  allocatePoints(
                    parseInt(this.attackValue.value),
                    parseInt(this.defenseValue.value)
                  )
                );
              }
            }}
          />
          <span>
            {this.props.player.previousDefense} +{" "}
            {isNaN(this.props.player.defenseAllocated)
              ? 0
              : this.props.player.defenseAllocated}
          </span>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  player: state.playerStats
});
export default connect(mapStateToProps)(StatsAllocator);
