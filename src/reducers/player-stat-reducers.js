import {
  ALLOCATE_ATTACK_POINTS,
  ALLOCATE_DEFENSE_POINTS,
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

  if (action.type === ALLOCATE_ATTACK_POINTS) {
    return {
      ...state,
      statPointsRemaining: state.initialStatPoints - action.payload,
      attackAllocated: action.payload
    };
  }

  if (action.type === ALLOCATE_DEFENSE_POINTS) {
    return {
      ...state,
      statPointsRemaining: state.initialStatPoints - action.payload,
      defenseAllocated: action.payload
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
