import axios from 'axios';
import {
  takeLatest, select, call, put,
} from 'redux-saga/effects';
import { makeSelectSelectedCategory } from 'containers/sideBar/SideBar/selectors';
import { addPlaylistToCategory } from 'containers/sideBar/CategoryContainer/actions';

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
    data.catid = yield select(makeSelectSelectedCategory);
    data.playlist = action.plName;
    const playlist = yield call(addPlaylistRequest, data);
    yield put(addPlaylistSuccess);
    yield put(addPlaylistToCategory, [playlist, data.catid]);
  } catch (err) {
    yield put(addPlaylistFailed, err);
  }
}

function addPlaylistRequest(data) {
  return (
    axios({
      method: 'post',
      url: 'https://thread-204819.appspot.com/addPlaylist',
      data,
      withCredentials: true,
    }).then(result => result.data).catch((error) => {
      throw new Error(error);
    })
  );
}
