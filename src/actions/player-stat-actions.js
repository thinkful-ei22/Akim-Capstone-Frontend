export const CREATE_NAME = "CREATE_NAME";
export const createName = name => ({
  type: CREATE_NAME,
  payload: name
});

export const ALLOCATE_POINTS = "ALLOCATE_POINTS";
export const allocatePoints = (attackValue, defenseValue) => ({
  type: ALLOCATE_POINTS,
  payload: attackValue,
  payload2: defenseValue
});

export const SAVE_STAT_POINTS = "SAVE_STAT_POINTS";
export const saveStatPoints = () => ({
  type: SAVE_STAT_POINTS
});

export const GRANT_PLAYER_STAT_POINTS = "GRANT_PLAYER_STAT_POINTS";
export const grantPlayerStatPoints = value => ({
  type: GRANT_PLAYER_STAT_POINTS,
  payload: value
});

export const CHANGE_PLAYER_HP = "CHANGE_PLAYER_HP";
export const changePlayerHP = value => ({
  type: CHANGE_PLAYER_HP,
  payload: value
});
