import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { setSuccess } from 'containers/Wrappers/SuccessWrapper/actions';

import { makeSelectSelectedCategoryId } from 'containers/SideBar/CategoryContainer/selectors';
import { makeSelectEditedPlaylistId } from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/EditPlaylistPortal/selectors';

import { DELETE_PLAYLIST } from './constants';
import { deletePlaylistSuccess, deletePlaylistFailed } from './actions';

export default function* rootSaga() {
  yield takeLatest(DELETE_PLAYLIST, deletePlaylist);
}

function* deletePlaylist() {
  try {
    const plid = yield select(makeSelectEditedPlaylistId());
    const catid = yield select(makeSelectSelectedCategoryId());
    yield call(deletePlaylistRequest, plid, catid);
    yield put(setSuccess('Playlist deleted.'));
    yield put(deletePlaylistSuccess(catid, plid));
  } catch (err) {
    yield put(setError(err.message));
    yield put(deletePlaylistFailed());
  }
}

function deletePlaylistRequest(plid, catid) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/deletePlaylist',
    data: {
      plid,
      catid,
    },
    withCredentials: true,
  }).catch(error => {
    throw error;
  });
}
