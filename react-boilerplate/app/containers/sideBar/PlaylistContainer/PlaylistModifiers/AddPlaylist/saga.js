import axios from 'axios';
import { takeLatest, select, call, put } from 'redux-saga/effects';
import { makeSelectSelectedCategoryId } from 'containers/SideBar/CategoryContainer/selectors';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { setSuccess } from 'containers/Wrappers/SuccessWrapper/actions';

import { ADD_PLAYLIST } from './constants';

import { addPlaylistSuccess, addPlaylistFailed } from './actions';

export default function* rootSaga() {
  yield takeLatest(ADD_PLAYLIST, addPlaylist);
}

function* addPlaylist(action) {
  try {
    const catid = yield select(makeSelectSelectedCategoryId());
    const plname = action.plName;
    const plid = yield call(addPlaylistRequest, catid, plname);
    const playlist = {
      plname,
      plid,
      isPublic: 0,
    };
    yield put(setSuccess('Playlist added.'));
    yield put(addPlaylistSuccess(playlist, catid));
  } catch (err) {
    yield put(addPlaylistFailed());
    yield put(setError(err.message));
  }
}

function addPlaylistRequest(catid, playlist) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/addPlaylist',
    data: {
      catid,
      playlist,
    },
    withCredentials: true,
  })
    .then(result => result.data[0])
    .catch(error => {
      throw error;
    });
}
