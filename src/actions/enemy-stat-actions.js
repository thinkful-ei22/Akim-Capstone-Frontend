export const CHANGE_ENEMY_HP = "CHANGE_ENEMY_HP";
export const changeEnemyHP = value => ({
  type: CHANGE_ENEMY_HP,
  payload: value
});

export const SET_NEW_ENEMY = "SET_NEW_ENEMY";
export const setNewEnemy = () => ({
  type: SET_NEW_ENEMY
});
