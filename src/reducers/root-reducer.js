import { combineReducers } from "redux";
import changePageReducer from "./game-reducer";
import playerStatReducer from "./player-stat-reducers";

export default combineReducers({
  page: changePageReducer,
  playerStats: playerStatReducer
});
