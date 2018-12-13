import {
  GET_CATS,
  GET_CATS_SUCCESS,
  GET_CATS_FAILED,
} from './constants';

export function getCategories(profile) {
  return {
    type: GET_CATS,
    profile,
  };
}

export function getCatsSuccess(cats, owner) {
  return {
    type: GET_CATS_SUCCESS,
    cats,
    owner,
  };
}

export function getCatsFailed(error) {
  return {
    type: GET_CATS_FAILED,
    error,
  };
}
