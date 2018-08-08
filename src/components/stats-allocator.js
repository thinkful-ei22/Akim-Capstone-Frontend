import React from "react";

export default function StatsAllocator(props) {
  return (
    <div>
      <fieldset>
        <legend>
          Allocate Stat Points : <span />{" "}
        </legend>
        <label htmlFor="attack-stat">Attack Points</label>
        <input name="attack-stat" type="number" id="attack-stat" min="0" />
        <br />
        <label htmlFor="defense-stat">Defense Points</label>
        <input name="defense-stat" type="number" id="defense-stat" min="0" />
      </fieldset>
    </div>
  );
}
