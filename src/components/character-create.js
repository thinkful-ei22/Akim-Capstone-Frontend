import React from "react";
import StatsAllocator from "./stats-allocator";
import { connect } from "react-redux";

function characterCreator(props) {
  return (
    <form>
      <label htmlFor="character-name">Name Your Character</label>
      <input name="character-name" type="text" id="character-name" />

      <StatsAllocator />

      <button type="submit">Create Character</button>
    </form>
  );
}

export default connect()(characterCreator);
