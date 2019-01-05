import {
  GET_FOLLOWING,
  GET_FOLLOWING_COMPLETED,
  GET_FOLLOWING_FAILED,
} from './constants';

export function getFollowing() {
  return {
    type: GET_FOLLOWING,
  };
}

export function getFollowingCompleted(following) {
  return {
    type: GET_FOLLOWING_COMPLETED,
    following,
  };
}

export function getFollowingFailed() {
  return {
    type: GET_FOLLOWING_FAILED,
  };
}
