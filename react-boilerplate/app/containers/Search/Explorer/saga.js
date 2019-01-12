import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { SEARCH_CHANGE } from './constants';
import { searchChangeCompleted, searchChangeFailed } from './actions';

export default function* SearchBarSaga() {
  yield takeLatest(SEARCH_CHANGE, searchChange);
}

function* searchChange(action) {
  try {
    const { string } = { ...action.string };
    const [users, playlists, songs] = yield [
      call(usersRequest, string),
      call(playlistsRequest, string),
      call(songsRequest, string),
    ];
    yield put(searchChangeCompleted({ users, playlists, songs }));
  } catch (err) {
    yield put(searchChangeFailed());
    yield put(setError(err.response.data || err.message));
  }
}

function usersRequest(string) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/searchUsersAll/${escape(
      string || '%'
    )}`,
  }).catch(err => {
    throw err;
  });
}
function playlistsRequest(string) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/searchPlaylistsAll/${escape(
      string || '%'
    )}`,
  }).catch(err => {
    throw err;
  });
}
function songsRequest(string) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/searchSongsAll/${escape(
      string || '%'
    )}`,
  }).catch(err => {
    throw err;
  });
}
