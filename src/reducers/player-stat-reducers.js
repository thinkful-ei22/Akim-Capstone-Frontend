import {
  ALLOCATE_POINTS,
  SAVE_STAT_POINTS,
  GRANT_PLAYER_STAT_POINTS
} from "../actions/player-stat-actions";

const initialState = {
  initialStatPoints: 0,
  statPointsRemaining: 0,
  previousAttack: 0,
  previousDefense: 0,
  attackAllocated: 0,
  defenseAllocated: 0
};

export default function(state = initialState, action) {
  if (action.type === GRANT_PLAYER_STAT_POINTS) {
    return {
      ...state,
      statPointsRemaining: action.payload,
      initialStatPoints: action.payload
    };
  }

  if (action.type === ALLOCATE_POINTS) {
    return {
      ...state,
      statPointsRemaining:
        state.initialStatPoints - (action.payload + action.payload2),
      attackAllocated: action.payload,
      defenseAllocated: action.payload2
    };
  }

  if (action.type === SAVE_STAT_POINTS) {
    return {
      ...state,
      previousAttack: state.attackAllocated,
      previousDefense: state.defenseAllocated
    };
  }

  return state;
}
