export const ALLOCATE_POINTS = "ALLOCATE_POINTS";
export const allocatePoints = (attackValue, defenseValue) => ({
  type: ALLOCATE_POINTS,
  payload: attackValue,
  payload2: defenseValue
});

export const SAVE_STAT_POINTS = "SAVE_STAT_POINTS";
export const saveStatPoints = value => ({
  type: SAVE_STAT_POINTS,
  payload: value
});

export const GRANT_PLAYER_STAT_POINTS = "GRANT_PLAYER_STAT_POINTS";
export const grantPlayerStatPoints = value => ({
  type: GRANT_PLAYER_STAT_POINTS,
  payload: value
});
