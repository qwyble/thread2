import {
  SET_PROFILE,
  GET_PROFILE,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
  SET_PARAMS_CONTEXT,
} from './constants';

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

export function getProfileFailed() {
  return {
    type: GET_PROFILE_FAILED,
  };
}

export function setParamsContext(match) {
  const { params } = { ...match };
  const root = match.path.split('/')[1];
  return {
    type: SET_PARAMS_CONTEXT,
    params,
    root,
  };
}
