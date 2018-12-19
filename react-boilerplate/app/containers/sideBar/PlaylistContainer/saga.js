
import { call, select, takeLatest, put } from 'redux-saga';
import { ADD_PLAYLIST_ATTEMPT } from './constants';

export default function* rootSaga() {
  yield takeLatest(ADD_PLAYLIST_ATTEMPT, addPlaylist);
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
