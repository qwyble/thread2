import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { GET_PROFILE } from './constants';
import { getProfileFailed, getProfileSuccess } from './actions';

export default function* rootSaga() {
  yield takeLatest(GET_PROFILE, getProfile);
}

function* getProfile(action) {
  try {
    const profile = yield call(getProfileRequest, action.profileId);
    yield put(getProfileSuccess(profile));
  } catch (err) {
    yield put(getProfileFailed());
    yield put(setError(err.message));
  }
}

function getProfileRequest(profileId) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/getProfile/${profileId}`,
    withCredentials: true,
  })
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
}
