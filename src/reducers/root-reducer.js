import { combineReducers } from "redux";
import changePageReducer from "./game-reducer";
import battleReducer from "./battle-reducers";

export default combineReducers({
  page: changePageReducer,
  battle: battleReducer
});
