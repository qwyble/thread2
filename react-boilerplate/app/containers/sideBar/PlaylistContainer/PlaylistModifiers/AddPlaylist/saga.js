import axios from 'axios';
import { takeLatest, select, call, put } from 'redux-saga/effects';
import { makeSelectSelectedCategoryId } from 'containers/SideBar/SideBarContainer/selectors';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { ADD_PLAYLIST } from './constants';

import {
  addPlaylistSuccess,
  addPlaylistFailed,
  addPlaylistToCategory,
} from './actions';

export default function* rootSaga() {
  yield takeLatest(ADD_PLAYLIST, addPlaylist);
}

function* addPlaylist(action) {
  try {
    let data;
    data.catid = yield select(makeSelectSelectedCategoryId);
    data.playlist = action.plName;
    const playlist = yield call(addPlaylistRequest, data);
    yield put(addPlaylistSuccess());
    yield put(addPlaylistToCategory(playlist, data.catid));
  } catch (err) {
    yield put(addPlaylistFailed());
    yield put(setError(err.message));
  }
}

function addPlaylistRequest(data) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/addPlaylist',
    data,
    withCredentials: true,
  })
    .then(result => result.data)
    .catch(error => {
      throw error;
    });
}
