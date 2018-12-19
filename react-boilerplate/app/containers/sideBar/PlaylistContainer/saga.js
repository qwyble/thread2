
import { call, select, takeLatest, put } from 'redux-saga';
import { ADD_PLAYLIST_ATTEMPT } from './constants';

export default function* rootSaga() {
  yield takeLatest(ADD_PLAYLIST_ATTEMPT, addPlaylist);
  yield takeLatest(DELETE_PLAYLIST_ATTEMPT, deletePlaylist);
}

function* addPlaylist(action) {
  try {
    let data;
    data["catid"] = yield select(makeSelectSelectedCategory);
    data["playlist"] = action.playlist;
    const playlist = yield call(addPlaylistRequest, data);
    yield put(addPlaylistSuccess, [playlist, data["catid"]]);
  } catch (err) {
    yield put(addPlaylistFailed, err);
  }
}

function* deletePlaylist(action) {
  try {
    let data;
    data['catid'] = action.catId;
    data['plid'] = action.plId;
    yield call(deletePlaylistRequest, data);
    yield put(deletePlaylistSuccess, data['plid']);
  } catch (err) {
    yield put(deletePlaylistFailed, err);
  }
}


function addPlaylistRequest(data) {
  return (
    axios({
      method: 'post',
      url: 'https://thread-204819.appspot.com/addPlaylist',
      data: data,
      withCredentials: true
    }).then((result) => {
      return result.data;
    }).catch(error => {
      throw new Error(error);
    });
  )
}

function deletePlaylistRequest(data) {
  return (
    axios({
      method: 'post',
      url: 'https://thread-204819.appspot.com/deletePlaylist',
      data: data,
      withCredentials: true
    }).catch((error) => {
      throw new Error(error);
    });
  )
}
