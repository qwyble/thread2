import { AUTH, AUTH_SUCCESS, AUTH_FAILED } from './constants';

export function authenticate(creds, ext) {
  return {
    type: AUTH,
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
