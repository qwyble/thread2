import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { DELETE_PLAYLIST } from './constants';
import {
  removePlaylistFromCategory,
  deletePlaylistSuccess,
  deletePlaylistFailed,
} from './actions';

export default function* rootSaga() {
  yield takeLatest(DELETE_PLAYLIST, deletePlaylist);
}

function* deletePlaylist(action) {
  try {
    let data;
    data.catid = action.catId;
    data.plid = action.plId;
    yield call(deletePlaylistRequest, data);
    yield put(deletePlaylistSuccess());
    yield put(removePlaylistFromCategory(data));
  } catch (err) {
    yield put(setError(err.message));
    yield put(deletePlaylistFailed());
  }
}

function deletePlaylistRequest(data) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/deletePlaylist',
    data,
    withCredentials: true,
  }).catch(error => {
    throw error;
  });
}
