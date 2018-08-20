import { combineReducers } from "redux";
import changePageReducer from "./game-reducer";
import battleReducer from "./battle-reducers";
import profileReducer from "./profile-reducer";

export default combineReducers({
  page: changePageReducer,
  battle: battleReducer,
  profile: profileReducer
});
