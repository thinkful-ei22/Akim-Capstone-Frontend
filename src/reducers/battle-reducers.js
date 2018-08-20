import {
  CREATE_NAME,
  ALLOCATE_POINTS,
  SAVE_STAT_POINTS,
  GRANT_PLAYER_STAT_POINTS
} from "../actions/player-stat-actions";
import { CHANGE_ENEMY_HP, SET_NEW_ENEMY } from "../actions/enemy-stat-actions";
import {
  DEAL_DAMAGE_PLAYER,
  DEAL_DAMAGE_ENEMY,
  LOG_A_TIE,
  RESET_GAME,
  BATTLE_ENSUES
} from "../actions/battle-actions";

const initialState = {
  battleRound: 0,
  playerChoice: "",
  enemyChoice: "",
  damageDealt: 0,
  player: {
    playerName: "",
    hitpoints: 100,
    initialStatPoints: 0,
    statPointsRemaining: 0,
    baseAttack: 0,
    baseDefense: 0,
    attackAllocated: 0,
    defenseAllocated: 0
  },
  enemy: {
    enemyName: "Feral Goblin",
    maxHitPoints: 100,
    hitpoints: 100,
    baseAttack: 15,
    baseDefense: 5
  },
  combatLog: []
};

export default function(state = initialState, action) {
  //PLAYER STAT ACTION HANDLERS

  if (action.type === CREATE_NAME) {
    return {
      ...state,
      player: { ...state.player, playerName: action.payload }
    };
  }

  if (action.type === GRANT_PLAYER_STAT_POINTS) {
    return {
      ...state,
      player: {
        ...state.player,
        statPointsRemaining: action.payload,
        initialStatPoints: action.payload
      }
    };
  }

  if (action.type === ALLOCATE_POINTS) {
    if (
      state.player.initialStatPoints - (action.payload + action.payload2) <
      0
    ) {
      return state;
    }
    return {
      ...state,
      player: {
        ...state.player,
        statPointsRemaining:
          state.player.initialStatPoints - (action.payload + action.payload2),
        attackAllocated: action.payload,
        defenseAllocated: action.payload2
      }
    };
  }

  if (action.type === SAVE_STAT_POINTS) {
    return {
      ...state,
      player: {
        ...state.player,
        baseAttack: state.player.baseAttack + state.player.attackAllocated,
        baseDefense: state.player.baseDefense + state.player.defenseAllocated,
        attackAllocated: 0,
        defenseAllocated: 0
      }
    };
  }

  //ENEMY STAT ACTION HANDLERS

  if (action.type === CHANGE_ENEMY_HP) {
    return {
      ...state,
      enemy: { ...state.enemy, enemyHP: action.payload }
    };
  }

  if (action.type === SET_NEW_ENEMY) {
    const newMaxHP =
      state.enemy.maxHitPoints + Math.floor(Math.random() * 11 + 5);
    return {
      ...state,
      battleRound: state.battleRound + 1,
      enemy: {
        ...state.enemy,
        maxHitpoints: newMaxHP,
        hitpoints: newMaxHP,
        baseAttack: state.enemy.baseAttack + Math.floor(Math.random() * 14 + 8),
        baseDefense: state.enemy.baseDefense + Math.floor(Math.random() * 6 + 4)
      }
    };
  }

  //BATTLE ACTION HANDLERS
  if (action.type === BATTLE_ENSUES) {
    return {
      ...state,
      combatLog: state.combatLog.concat(["Battle Ensues...", " "])
    };
  }

  if (action.type === DEAL_DAMAGE_PLAYER) {
    return {
      ...state,
      combatLog: state.combatLog.concat([
        `You chose ${action.playerChoice}...,
        Enemy chose ${action.enemyChoice}...`,
        `You lose this exchange and take ${action.damage} damage!`,
        " "
      ]),
      player: {
        ...state.player,
        hitpoints: state.player.hitpoints - action.damage
      }
    };
  }

  if (action.type === DEAL_DAMAGE_ENEMY) {
    return {
      ...state,
      combatLog: state.combatLog.concat([
        `You chose ${action.playerChoice}...,
        Enemy chose ${action.enemyChoice}...`,
        `You win this exchange and deal ${action.damage} damage!`,
        " "
      ]),
      enemy: {
        ...state.enemy,
        hitpoints: state.enemy.hitpoints - action.damage
      }
    };
  }

  if (action.type === LOG_A_TIE) {
    return {
      ...state,
      combatLog: state.combatLog.concat([
        `an even exchange, you both chose ${action.payload}`,
        " "
      ])
    };
  }

  //RESET THE STATS
  if (action.type === RESET_GAME) {
    return {
      battleRound: 0,
      playerChoice: "",
      enemyChoice: "",
      damageDealt: 0,
      player: {
        playerName: "",
        hitpoints: 100,
        initialStatPoints: 0,
        statPointsRemaining: 0,
        baseAttack: 0,
        baseDefense: 0,
        attackAllocated: 0,
        defenseAllocated: 0
      },
      enemy: {
        enemyName: "Feral Goblin",
        maxHitPoints: 100,
        hitpoints: 100,
        baseAttack: 15,
        baseDefense: 5
      },
      combatLog: []
    };
  }
  return state;
}
