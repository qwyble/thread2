import { AUTH_ATTEMPT, AUTH_SUCCESS, AUTH_FAILED } from './constants';

export function authenticate(creds, ext) {
  return {
    type: AUTH_ATTEMPT,
    creds,
    ext,
  };
}

export function authSuccess(user) {
  return {
    type: AUTH_SUCCESS,
    user,
  };
}

export function authFailed(error) {
  return {
    type: AUTH_FAILED,
    error,
  };
}
