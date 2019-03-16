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
  const { id, by } = action;
  try {
    let profile;
    if (by === 'profileId') {
      profile = yield call(getProfileRequest, id);
    } else if (by === 'plid') {
      profile = yield call(getProfileByPlaylistRequest, id);
    }
    yield put(getProfileSuccess(profile));
  } catch (err) {
    yield put(getProfileFailed());
    yield put(setError(err.message));
  }
}

function* setParamsContext(action) {
  const user = yield select(makeSelectUser());
  if (action.params.profile) {
    if (user.get('idUsers') === action.params.profile) {
      yield put(setProfile(user));
    } else {
      yield put(getProfile(action.params.profile, 'profileId'));
    }
  } else if (action.params.playlist) {
    yield put(getProfile(action.params.playlist, 'plid'));
  } else {
    yield put(setProfile(user));
  }
}

function getProfileRequest(profileId) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/getProfile/${profileId}`,
    withCredentials: true,
  })
    .then(response => response.data[0])
    .catch(err => {
      throw err;
    });
}

function getProfileByPlaylistRequest(plid) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/getProfileByPlaylist/${plid}`,
    withCredentials: true,
  })
    .then(response => response.data[0])
    .catch(err => {
      throw err;
    });
}
