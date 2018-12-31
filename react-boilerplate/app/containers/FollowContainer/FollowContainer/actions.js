import {
  GET_IS_FOLLOWING,
  GET_IS_FOLLOWING_COMPLETE,
  FOLLOW_USER,
  FOLLOW_USER_COMPLETE,
} from './constants';

export function getIsFollowing(userId, ownerId) {
  return {
    type: GET_IS_FOLLOWING,
    userId,
    ownerId,
  };
}

export function getIsFollowingComplete(isFollowing) {
  return {
    type: GET_IS_FOLLOWING_COMPLETE,
    isFollowing,
  };
}

export function followUser(userId, ownerId) {
  return {
    type: FOLLOW_USER,
    userId,
    ownerId,
  };
}

export function followUserComplete(isFollowing) {
  return {
    type: FOLLOW_USER_COMPLETE,
    isFollowing,
  };
}
