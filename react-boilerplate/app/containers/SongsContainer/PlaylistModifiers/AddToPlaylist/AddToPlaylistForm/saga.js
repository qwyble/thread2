import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import { addSongsToPlaylist } from 'containers/SongsContainer/SongsContainer/actions';
import { makeSelectSelectedSongs } from 'containers/SongsContainer/SongsContainer/selectors';
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
    yield put(addSongsToPlSuccess);
    yield put(addSongsToPlaylist, songsToAdd);
  } catch (error) {
    yield put(addSongsToPlFailed, error);
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
    throw new Error(err);
  });
}
