import React from "react";
import StatsAllocator from "./stats-allocator";
import { connect } from "react-redux";
import { createName, saveStatPoints } from "../actions/player-stat-actions";
import { changePage } from "../actions/game-actions";

class CharacterCreator extends React.Component {
  constructor(props) {
    super(props);
    this.playerName = "";
  }
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.createName(this.playerName.value);
          this.props.saveStatPoints();
          this.props.changePage("battle");
        }}
      >
        <label htmlFor="character-name">Name Your Character</label>
        <input
          name="character-name"
          type="text"
          id="character-name"
          ref={input => (this.playerName = input)}
          required
        />

        <br />
        <br />

        <StatsAllocator />

        <button type="submit">Create Character</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { createName, saveStatPoints, changePage }
)(CharacterCreator);
