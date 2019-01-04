import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { makeSelectSelectedSongs } from 'containers/SongsContainer/SongsContainer/selectors';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { ADD_SONGS_TO_PL } from './constants';
import { addSongsToPlSuccess, addSongsToPlFailed } from './actions';

export default function* addToPlaylistSaga() {
  yield takeLatest(ADD_SONGS_TO_PL, addSongs);
}

function* addSongs(action) {
  try {
    const songsToAdd = yield select(makeSelectSelectedSongs);
    const { plid } = { ...action };
    yield call(addSongsRequest, [songsToAdd, plid]);
    yield put(addSongsToPlSuccess());
  } catch (err) {
    yield put(addSongsToPlFailed());
    yield put(setError(err.message));
  }
}

function addSongsRequest(songsToAdd, plid) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/addSongsToPlaylist',
    data: {
      songs: songsToAdd,
      playlist: plid,
    },
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}
