import {
  GET_CATS,
  SET_PROFILE,
  GET_PROFILE,
  GET_CATS_FAILED,
  GET_CATS_SUCCESS,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
} from './constants';

export function getCategories(profileId) {
  return {
    type: GET_CATS,
    profileId,
  };
}

export function getCatsSuccess(cats) {
  return {
    type: GET_CATS_SUCCESS,
    cats,
  };
}

export function getCatsFailed(error) {
  return {
    type: GET_CATS_FAILED,
    error,
  };
}

export function setProfile(profile) {
  return {
    type: SET_PROFILE,
    profile,
  };
}

export function getProfile(profileId) {
  return {
    type: GET_PROFILE,
    profileId,
  };
}

export function getProfileSuccess(profile) {
  return {
    type: GET_PROFILE_SUCCESS,
    profile,
  };
}

export function getProfileFailed(error) {
  return {
    type: GET_PROFILE_FAILED,
    error,
  };
}
