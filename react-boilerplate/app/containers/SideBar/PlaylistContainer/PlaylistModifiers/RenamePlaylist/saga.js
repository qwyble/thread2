import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { renamePlInCat } from 'containers/SideBar/CategoryContainer/actions';
import { renamePlaylistSuccess, renamePlaylistFailed } from './actions';

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
    yield call(renamePlaylistRequest, data);
    yield put(renamePlaylistSuccess);
    yield put(renamePlInCat, [data.plid, data.plname]);
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
    .catch(err => {
      throw new Error(err);
    });
}
