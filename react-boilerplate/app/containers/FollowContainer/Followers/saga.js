import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { GET_FOLLOWERS } from './constants';
import { getFollowersCompleted, getFollowersFailed } from './actions';

export default function* followersSaga() {
  yield takeLatest(GET_FOLLOWERS, getFollowers);
}

function* getFollowers() {
  try {
    const followers = yield call(getFollowersRequest);
    yield put(getFollowersCompleted(followers));
  } catch (err) {
    yield put(getFollowersFailed());
    yield put(setError(err.message));
  }
}

function getFollowersRequest() {
  return axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/getFollowers',
    withCredentials: true,
  })
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
}
