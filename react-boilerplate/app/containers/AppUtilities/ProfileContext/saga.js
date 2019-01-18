import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { makeSelectUser } from 'containers/AppUtilities/UserContainer/selectors';

import { GET_PROFILE, SET_PARAMS_CONTEXT } from './constants';
import {
  getProfileFailed,
  getProfileSuccess,
  getProfile,
  setProfile,
} from './actions';

export default function* rootSaga() {
  yield takeLatest(GET_PROFILE, getProfileSaga);
  yield takeLatest(SET_PARAMS_CONTEXT, setParamsContext);
}

function* getProfileSaga(action) {
  try {
    const profile = yield call(getProfileRequest, action.profileId);
    console.log(profile);
    yield put(getProfileSuccess(profile));
  } catch (err) {
    yield put(getProfileFailed());
    yield put(setError(err.message));
  }
}

function* setParamsContext(action) {
  if (action.params.profile) yield put(getProfile(action.params.profile));
  else {
    const user = yield select(makeSelectUser());
    yield put(setProfile(user));
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
