import { SET_SUCCESS, REMOVE_SUCCESS } from './constants';

export function setSuccess(success) {
  return {
    type: SET_SUCCESS,
    success,
  };
}

export function removeSuccess() {
  return {
    type: REMOVE_SUCCESS,
  };
}
