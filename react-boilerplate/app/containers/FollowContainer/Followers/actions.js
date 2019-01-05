import {
  GET_FOLLOWERS,
  GET_FOLLOWERS_COMPLETED,
  GET_FOLLOWERS_FAILED,
} from './constants';

export function getFollowers() {
  return {
    type: GET_FOLLOWERS,
  };
}

export function getFollowersCompleted(followers) {
  return {
    type: GET_FOLLOWERS_COMPLETED,
    followers,
  };
}

export function getFollowersFailed() {
  return {
    type: GET_FOLLOWERS_FAILED,
  };
}
