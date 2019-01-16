import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { GET_FOLLOWING } from './constants';
import { getFollowingCompleted, getFollowingFailed } from './actions';

export default function* followingSaga() {
  yield takeLatest(GET_FOLLOWING, getFollowing);
}

function* getFollowing() {
  try {
    const following = yield call(getFollowingRequest);
    yield put(getFollowingCompleted(following));
  } catch (err) {
    yield put(getFollowingFailed());
    yield put(setError(err.message));
  }
}

function getFollowingRequest() {
  return axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/getFollowing',
    withCredentials: true,
  })
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
}
