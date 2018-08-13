export const PLAYER_CHOOSES = "PLAYER_CHOOSES";
export const playerChooses = choice => ({
  type: PLAYER_CHOOSES,
  payload: choice
});

export const DEAL_DAMAGE_PLAYER = "DEAL_DAMAGE_PLAYER";
export const dealDamagePlayer = result => ({
  type: DEAL_DAMAGE_PLAYER,
  damage: result.damage,
  playerChoice: result.playerChoice,
  enemyChoice: result.enemyChoice
});

export const DEAL_DAMAGE_ENEMY = "DEAL_DAMAGE_ENEMY";
export const dealDamageEnemy = result => ({
  type: DEAL_DAMAGE_ENEMY,
  damage: result.damage,
  playerChoice: result.playerChoice,
  enemyChoice: result.enemyChoice
});

export const LOG_A_TIE = "LOG_A_TIE";
export const logTie = enemyChoice => ({
  type: LOG_A_TIE,
  payload: enemyChoice
});

export const RESET_GAME = "RESET_GAME";
export const resetGame = () => ({
  type: RESET_GAME
});
