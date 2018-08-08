export const ALLOCATE_ATTACK_POINTS = "ALLOCATE_ATTACK_POINTS";
export const allocateAttackPoints = value => ({
  type: ALLOCATE_ATTACK_POINTS,
  payload: value
});

export const ALLOCATE_DEFENSE_POINTS = "ALLOCATE_DEFENSE_POINTS";
export const allocateDefensePoints = value => ({
  type: ALLOCATE_DEFENSE_POINTS,
  payload: value
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
