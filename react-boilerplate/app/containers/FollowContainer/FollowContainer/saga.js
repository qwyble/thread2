import axios from 'axios';
import { call, select, takeLatest, put } from 'redux-saga/effects';
import {
  makeSelectProfileId,
  makeSelectUserId,
} from 'containers/AppUtilities/ProfileContext/selectors';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { makeSelectIsFollowing } from './selectors';
import { GET_IS_FOLLOWING, FOLLOW_USER } from './constants';
import { getIsFollowingComplete, followUserComplete } from './actions';

export default function* FollowContainerSaga() {
  yield takeLatest(GET_IS_FOLLOWING, getIsFollowing);
  yield takeLatest(FOLLOW_USER, followUser);
}

function* getIsFollowing() {
  try {
    const ownerId = yield select(makeSelectProfileId());
    const userId = yield select(makeSelectUserId());
    const isFollowing = yield call(getIsFollowingRequest, ownerId, userId);
    yield put(getIsFollowingComplete(isFollowing));
  } catch (err) {
    yield put(getIsFollowingComplete(false));
    yield put(setError(err.message));
  }
}

function* followUser() {
  const ownerId = yield select(makeSelectProfileId());
  const isFollowing = yield select(makeSelectIsFollowing());
  try {
    if (isFollowing) {
      yield call(unfollowUserRequest, ownerId);
      yield put(followUserComplete(false));
    } else {
      yield call(followUserRequest, ownerId);
      yield put(followUserComplete(true));
    }
  } catch (err) {
    yield put(followUserComplete(isFollowing));
    yield put(setError(err.message));
  }
}

function getIsFollowingRequest(owner, user) {
  axios
    .get('https://thread-204819.appspot.com/getIsFollowing', {
      params: {
        user,
        owner,
      },
    })
    .then(result => {
      if (result.data.length === 0) return false;
      return true;
    })
    .catch(err => {
      throw err;
    });
}

function unfollowUserRequest(owner) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/follow',
    data: {
      owner,
    },
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}

function followUserRequest(owner) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/unfollow',
    data: {
      owner,
    },
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}
