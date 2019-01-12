import { axios } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { addPlaylistToCategory } from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/AddPlaylist/actions';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { CLONE_PLAYLIST } from './constants';
import { clonePlaylistSuccess, clonePlaylistFailed } from './actions';

export default function* clonePortalSaga() {
  yield takeLatest(CLONE_PLAYLIST, clonePlaylist);
}

function* clonePlaylist(action) {
  try {
    const { catId, plName, plToClone } = { ...action };
    const plToAdd = yield call(clonePlaylistRequest, catId, plName, plToClone);
    yield put(clonePlaylistSuccess());
    yield put(addPlaylistToCategory(plToAdd, catId));
  } catch (err) {
    yield put(clonePlaylistFailed());
    yield put(setError(err.response.data || err.message));
  }
}

// TODO: make sure this returns the added playlist
function clonePlaylistRequest(catId, plname, plToClone) {
  return axios
    .post(
      'https://thread-204819.appspot.com/clonePlaylist',
      {
        selectedCat: catId,
        plToClone,
        plname,
      },
      { withCredentials: true }
    )
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}
