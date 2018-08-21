import jwtDecode from "jwt-decode";
import { BACKEND_URL, CLIENT_URL } from "../config";
//REGISTRATION
////opens registration form
export const BEGIN_REGISTRATION = "BEGIN_REGISTRATION";
export const beginRegistration = () => ({
  type: BEGIN_REGISTRATION
});

////closes registration form
export const END_REGISTRATION = "END_REGISTRATION";
export const endRegistration = () => ({
  type: END_REGISTRATION
});

////user registration post request
export const FETCH_REGISTRATION_REQUEST = "FETCH_REGISTRATION_REQUEST";
export const fetchRegistrationRequest = () => ({
  type: FETCH_REGISTRATION_REQUEST
});

export const FETCH_REGISTRATION_SUCCESS = "FETCH_REGISTRATION_SUCCESS";
export const fetchRegistrationSuccess = () => ({
  type: FETCH_REGISTRATION_SUCCESS
});

export const FETCH_REGISTRATION_ERROR = "FETCH_REGISTRATION_ERROR";
export const fetchRegistrationError = error => ({
  type: FETCH_REGISTRATION_ERROR,
  payload: error
});

export const fetchRegistration = credentials => dispatch => {
  dispatch(fetchRegistrationRequest());
  fetch(`${BACKEND_URL}/api/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials)
  })
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response;
    })
    .then(response => {
      return response.json();
    })
    .then(parsedResponse => {
      if (parsedResponse) {
        dispatch(fetchRegistrationSuccess());
      }
    })
    .catch(error => {
      const parsedError = error.json().then(parsedError => {
        console.log(parsedError.message);
        dispatch(fetchRegistrationError(parsedError.message));
      });
    });
};

//ALLOW USER TO LOGIN
export const FETCH_LOGIN_REQUEST = "FETCH_LOGIN_REQUEST";
export const fetchLoginRequest = () => ({
  type: FETCH_LOGIN_REQUEST
});

export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const fetchLoginSuccess = username => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: username
});

export const FETCH_LOGIN_ERROR = "FETCH_LOGIN_ERROR";
export const fetchLoginError = error => ({
  type: FETCH_LOGIN_ERROR,
  payload: error
});

export const fetchLogin = credentials => dispatch => {
  dispatch(fetchLoginRequest());
  fetch(`${BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then(response => {
      return response.json();
    })
    .then(parsedResponse => {
      const decodedToken = jwtDecode(parsedResponse.authToken);
      console.log(decodedToken);
      dispatch(fetchLoginSuccess(decodedToken.user));
      window.sessionStorage.setItem("authToken", parsedResponse.authToken);
    })
    .catch(error => dispatch(fetchLoginError(error)));
};

//gets the user profile

export const FETCH_PROFILE_REQUEST = "FETCH_PROFILE_REQUEST";
export const fetchProfileRequest = () => ({
  type: FETCH_PROFILE_REQUEST
});

export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const fetchProfileSuccess = profile => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: profile
});

export const FETCH_PROFILE_ERROR = "FETCH_PROFILE_ERROR";
export const fetchProfileError = error => ({
  type: FETCH_PROFILE_ERROR,
  payload: error
});

export const fetchProfile = () => dispatch => {
  dispatch(fetchProfileRequest());
  fetch(`${BACKEND_URL}/api/game/profile`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.sessionStorage.getItem("authToken")}`
    }
  })
    .then(res => res.json())
    .then(profile => {
      dispatch(fetchProfileSuccess(profile));
    })
    .catch(error => {
      dispatch(fetchProfileError(error));
    });
};

//component side error message manipulation
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const setErrorMessage = message => ({
  type: SET_ERROR_MESSAGE,
  payload: message
});

export const LOGOUT = "LOGOUT";
export const logout = () => ({
  type: LOGOUT
});
