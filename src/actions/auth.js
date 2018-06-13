import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {saveAuthToken, clearAuthToken} from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN', 
  setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
  });
export const CLEAR_AUTH = 'CLEAR_AUTH',
  clearAuth = () => ({
    type: CLEAR_AUTH
  });
export const CLEAR_USER = 'CLEAR_USER',
  clearUser = () => ({
    type: CLEAR_USER
  });
export const AUTH_REQUEST = 'AUTH_REQUEST',
  authRequest = () => ({
    type: AUTH_REQUEST
  });
export const AUTH_SUCCESS = 'AUTH_SUCCESS',
  authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
  });
export const AUTH_ERROR = 'AUTH_ERROR',
  authError = error => ({
    type: AUTH_ERROR,
    error
  });

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

export const login = (username, password) => dispatch => {
  dispatch(authRequest());
  return (
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
  // Reject any requests which don't return a 200 status, creating
  // errors which follow a consistent format
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({authToken}) => storeAuthInfo(authToken, dispatch))
      .catch(err => {
        console.log(err);
        const {code} = err;
        const message =
                    code === 401
                      ? 'Incorrect username or password'
                      : 'Unable to login, please try again';
        dispatch(authError(err));
        // Could not authenticate, so return a SubmissionError for Redux
        // Form
        console.log(message);
        return Promise.reject(new SubmissionError({
          _error: message
        }));
      })
  );
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {Authorization: `Bearer ${authToken}`}
  })
    .then(err => normalizeResponseErrors(err))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      dispatch(authError(err)); dispatch(clearAuth());
      clearAuthToken(authToken);
    });
};
