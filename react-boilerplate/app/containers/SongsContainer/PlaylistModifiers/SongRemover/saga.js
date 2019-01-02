import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import { makeSelectSelectedSongs } from 'containers/SongsContainer/SongsContainer/selectors';
import { makeSelectSelectedPlaylist } from 'containers/SideBar/SideBarContainer/selectors';

import { removeSongsFromPl } from 'containers/SongsContainer/SongsContainer/actions';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { removeSongsCompleted, removeSongsFailed } from './actions';

import { REMOVE_SONGS } from './constants';

export default function* songRemoverSaga() {
  yield takeLatest(REMOVE_SONGS, removeSongs);
}

function* removeSongs() {
  try {
    const selectedSongs = yield select(makeSelectSelectedSongs);
    const selectedPlaylist = yield select(makeSelectSelectedPlaylist);
    yield call(removeSongsRequest, [selectedSongs, selectedPlaylist]);
    yield put(removeSongsFromPl, [selectedSongs, selectedPlaylist]);
    yield put(removeSongsCompleted);
  } catch (err) {
    yield put(removeSongsFailed);
    yield put(setError, err.message);
  }
}

function removeSongsRequest(songs, playlist) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/deleteFromPlaylist',
    data: {
      songs,
      playlist,
    },
    withCredentials: true,
  }).catch(err => {
    throw new Error(err.message);
  });
}
