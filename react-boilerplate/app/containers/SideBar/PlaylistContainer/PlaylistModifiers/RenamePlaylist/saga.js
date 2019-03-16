import axios from 'axios';
import { call, put, takeLatest, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { setSuccess } from 'containers/Wrappers/SuccessWrapper/actions';

import { renamePlaylistSuccess, renamePlaylistFailed } from './actions';

import { RENAME_PLAYLIST } from './constants';
import { makeSelectEditedPlaylistId } from '../EditPlaylistPortal/selectors';

export default function* renamePlaylistSaga() {
  yield takeLatest(RENAME_PLAYLIST, renamePlaylist);
}
// TODO: make sure renamePlaylistRequest returns getCats object
function* renamePlaylist(action) {
  try {
    const plid = yield select(makeSelectEditedPlaylistId());
    const { newName } = action;
    yield call(renamePlaylistRequest, plid, newName);
    yield put(setSuccess('Playlist renamed.'));
    yield put(renamePlaylistSuccess(plid, newName));
  } catch (err) {
    yield put(renamePlaylistFailed());
    yield put(setError(err.message));
  }
}

function renamePlaylistRequest(plid, plname) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/renamePlaylist',
    data: {
      plid,
      plname,
    },
    withCredentials: true,
  })
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}
