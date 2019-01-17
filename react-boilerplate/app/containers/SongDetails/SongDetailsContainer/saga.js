import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { setSuccess } from 'containers/Wrappers/SuccessWrapper/actions';

import { makeSelectSong } from './selectors';
import { GET_SONG, DELETE_SONG } from './constants';
import {
  getSongCompleted,
  getSongFailed,
  deleteSongCompleted,
  deleteSongFailed,
} from './actions';

export default function* SongDetailsSaga() {
  yield takeLatest(GET_SONG, getSong);
  yield takeLatest(DELETE_SONG, deleteSong);
}

function* getSong(action) {
  try {
    const { songId } = { ...action };
    console.log(songId);
    const song = yield call(getSongRequest, songId);
    console.log(song);
    yield put(getSongCompleted(song));
  } catch (err) {
    yield put(setError(err.message));
    yield put(getSongFailed());
  }
}

function* deleteSong() {
  try {
    const song = yield select(makeSelectSong);
    yield call(deleteSongRequest, song);
    yield put(deleteSongCompleted());
    yield put(setSuccess('song deleted'));
  } catch (err) {
    yield put(setError(err.message));
    yield put(deleteSongFailed());
  }
}

function getSongRequest(songId) {
  return axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/getSong',
    params: {
      songId,
    },
  })
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}

function deleteSongRequest(song) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/deleteSongs',
    data: {
      songId: song.idSongs,
      fileName: song.fileName,
    },
    withCredentials: true,
  });
}
