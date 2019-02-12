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
    const { string } = { ...action };
    const searchString = string || encodeURI('%');
    const [users, playlists, songs] = yield [
      call(usersRequest, searchString),
      call(playlistsRequest, searchString),
      call(songsRequest, searchString),
    ];
    yield put(searchChangeCompleted({ users, playlists, songs }));
  } catch (err) {
    yield put(searchChangeFailed());
    yield put(setError(err.message));
  }
}

function usersRequest(string) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/searchUsersAll/${string}`,
  })
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}
function playlistsRequest(string) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/searchPlaylistsAll/${string}`,
  })
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}
function songsRequest(string) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/searchSongsAll/${string}`,
  })
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}
