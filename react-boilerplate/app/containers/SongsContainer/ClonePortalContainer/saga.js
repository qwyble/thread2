import { call, put, takeLatest, select } from 'redux-saga/effects';
import { addPlaylistToCategory } from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/AddPlaylist/actions';
import { CLONE_PLAYLIST } from './constants';
import { clonePlaylistSuccess, clonePlaylistFailed } from './actions';

export default function* clonePortalSaga() {
  yield takeLatest(CLONE_PLAYLIST, clonePlaylist);
}

function* clonePlaylist(action) {
  try {
    const { catId, plName, plToClone } = { ...action };
    const plToAdd = yield call(clonePlaylistRequest, [
      catId,
      plName,
      plToClone,
    ]);
    yield put(clonePlaylistSuccess);
    yield put(addPlaylistToCategory, [plToAdd, catId]);
  } catch (err) {
    yield put(clonePlaylistFailed, err);
  }
}

// TODO: make sure this returns the added playlist

axios
  .post(
    'https://thread-204819.appspot.com/clonePlaylist',
    {
      selectedCat: this.state.selectedCatId,
      plToClone: this.state.plToClone,
      plname: this.state.plname,
    },
    { withCredentials: true }
  )
  .then(result => {
    this.setState({ _loading: false, success: true });
  });
