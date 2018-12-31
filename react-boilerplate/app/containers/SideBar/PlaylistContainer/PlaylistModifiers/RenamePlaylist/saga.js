import { call, put, takeLatest } from 'redux-saga/effects';
import {
  renamePlaylistSuccess,
  renamePlaylistFailed,
} from './actions';

import {
  getCategoriesSuccess
} from 'containers/SideBar/CategoryContainer/actions';

import { RENAME_PLAYLIST } from './constants';

export default function* renamePlaylistSaga() {
  yield takeLatest(RENAME_PLAYLIST, renamePlaylist);
}
// TODO: make sure renamePlaylistRequest returns getCats object
function* renamePlaylist(action) {
  try {
    let data;
    data.plid = action.playlist.plid;
    data.plname = action.playlist.plname;
    const newCats = yield call(renamePlaylistRequest, data);
    yield put(renamePlaylistSuccess);
    yield put(getCategoriesSuccess, newCats);
  } catch (err) {
    yield put(renamePlaylistFailed, err);
  }
}

function renamePlaylistRequest() {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/renamePlaylist',
    data,
    withCredentials: true,
  })
    .then(result => result.data)
    .catch(err => throw new Error(err));
}
