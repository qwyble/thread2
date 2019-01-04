import { SET_SUCCESS, REMOVE_SUCCESS } from './constants';

export function setSuccess(error) {
  return {
    type: SET_SUCCESS,
    error,
  };
}

export function removeSuccess() {
  return {
    type: REMOVE_SUCCESS,
  };
}
