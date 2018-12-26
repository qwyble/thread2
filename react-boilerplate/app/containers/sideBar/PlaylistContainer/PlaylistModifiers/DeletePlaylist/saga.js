
import { call, select, takeLatest, put } from 'redux-saga';

export default function* rootSaga() {
  yield takeLatest(DELETE_PLAYLIST, deletePlaylist);
}


function* deletePlaylist(action) {
  try {
    let data;
    data['catid'] = action.catId;
    data['plid'] = action.plId;
    yield call(deletePlaylistRequest, data);
    yield put(deletePlaylistSuccess);
    yield put(removePlFromCategory, data);
  } catch (err) {
    yield put(deletePlaylistFailed, err);
  }
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
