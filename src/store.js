import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
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
  return {};
  // try {
  //   const serializedState = localStorage.getItem("state");
  //   //react redux won't process null values, so in case it's null, we return undefined
  //   if (serializedState === null) return undefined;
  //   return JSON.parse(serializedState);
  // } catch (e) {
  //   console.log(e);
  //   //here we make sure our error obj doesn't overwrite state.
  //   return undefined;
  // }
}

const persistedState = loadFromLocalStorage();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
