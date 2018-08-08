import { CHANGE_PAGE } from "../actions/game-actions";

const initialState = { currentPage: "main" };

export default function(state = initialState, action) {
  if (action.type === CHANGE_PAGE) {
    return { ...state, currentPage: action.payload };
  }
  return state;
}
