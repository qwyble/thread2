import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { setSuccess } from 'containers/Wrappers/SuccessWrapper/actions';

import { makeSelectPlaylistParam } from 'containers/AppUtilities/ProfileContext/selectors';

import { GET_PLAYLIST } from './constants';
import { setPlaylist } from './actions';

export default function* playlistContainerSaga() {
  yield takeLatest(GET_PLAYLIST, getPlaylistSaga);
}

function* getPlaylistSaga() {
  try {
    const plid = yield select(makeSelectPlaylistParam());
    const playlist = yield call(getPlaylistRequest, plid);
    yield put(setPlaylist(fromJS(playlist)));
    yield put(setSuccess(`Playlist ${plid} retrieved.`));
  } catch (err) {
    yield put(setError(err));
  }
}

function getPlaylistRequest(plid) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/getPlaylist/${plid}`,
    withCredentials: true,
  })
    .then(result => result.data)
    .catch(err => {
      throw new Error(err.message);
    });
}
