import {
  FETCH_REGISTRATION_REQUEST,
  FETCH_REGISTRATION_SUCCESS,
  FETCH_REGISTRATION_ERROR,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ERROR,
  BEGIN_REGISTRATION,
  END_REGISTRATION,
  SET_ERROR_MESSAGE
} from "../actions/profile-actions";

const initialState = {
  userRegistering: false,
  userCreated: false,
  loggedIn: false,
  loading: false,
  user: {
    username: null,
    highestRound: 0
  },
  errorMessage: ""
};

console.log(initialState);

export default function(state = initialState, action) {
  console.log(state, action);
  //Loading screens while making requests
  if (
    action.type === FETCH_REGISTRATION_REQUEST ||
    action.type === FETCH_LOGIN_REQUEST ||
    action.type === FETCH_PROFILE_REQUEST
  ) {
    return { ...state, loading: true };
  }
  console.log(action.type === BEGIN_REGISTRATION);
  //open registration form
  if (action.type === BEGIN_REGISTRATION) {
    console.log(action);
    return { ...state, userRegistering: true };
  }

  //close registration form
  if (action.type === END_REGISTRATION) {
    return {
      ...state,
      userRegistering: false,
      userCreated: false,
      errorMessage: ""
    };
  }

  //USER REGISTRATION REQUEST BLOCK
  if (action.type === FETCH_REGISTRATION_SUCCESS) {
    return { ...state, loading: false, userCreated: true, errorMessage: "" };
  }

  if (action.type === FETCH_REGISTRATION_ERROR) {
    return { ...state, errorMessage: action.payload };
  }

  //USER LOGIN REQUEST BLOCK
  if (action.type === FETCH_LOGIN_SUCCESS) {
    console.log(action);
    return {
      ...state,
      user: action.payload,
      loading: false,
      loggedIn: true,
      errorMessage: ""
    };
  }

  if (action.type === FETCH_LOGIN_ERROR) {
    return { ...state, errorMessage: action.payload };
  }

  //USER PROFILE REQUEST BLOCK
  if (action.type === FETCH_PROFILE_SUCCESS) {
    return { ...state, userCreated: true, loading: false, errorMessage: "" };
  }

  if (action.type === FETCH_PROFILE_ERROR) {
    return { ...state, errorMessage: action.payload };
  }

  if (action.type === SET_ERROR_MESSAGE) {
    return { ...state, errorMessage: action.payload };
  }

  return state;
}
