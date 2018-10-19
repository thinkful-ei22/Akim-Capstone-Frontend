import React from "react";
import { connect } from "react-redux";

function IntroPage(props) {
  return (
    <div>
      <h1>Behold the Maw...</h1>

      <p>
        A cave leading into the belly of the Earth. Many are drawn into its
        depths by tell of fabulous treasures, and powerful artifacts. But, it is
        also a place of unspeakable evil, reviled among common folk. Creatures
        most wretched infest every nook and cranny of its foul depths;
        hateful... hungry... they set upon anyone foolish enough to be caught
        unawares, tormenting them, and ultimately dragging them into down into
        the dark abyss, where the corruption in the air thickens, and still
        viler beings lie in wait.
      </p>

      <p>
        Precious few ever return from that abominable pit, of these fewer still
        make it out having acquired anything of value. None return whole.
      </p>

      <p>
        Even so, as long as there are spoils to be won, and glory to be gained,
        there are folk willing to risk their lives to attain it. Have you the
        gumption to venture into the Maw of the Earth, and reap the rewards
        reserved only for those who return?

        Or will you fall in those unholy crypts?
      </p>

      <button>Begin</button>
    </div>
  );
}
