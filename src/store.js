import { createStore } from "redux";
import rootReducer from "./reducers/root-reducer";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    //react redux won't process null values, so in case it's null, we return undefined
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    //here we make sure our error obj doesn't overwrite state.
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
