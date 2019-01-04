import { call, takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { makeSelectProfileId } from 'containers/AppUtilities/ProfileContext/selectors';
import { makeSelectPlaylistParam } from 'containers/SideBar/SideBarContainer/selectors';

import { setPlaylist } from 'containers/SideBar/SideBarContainer/actions';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { GET_CATEGORIES } from './constants';
import { getCategoriesCompleted } from './actions';

export default function* CategoryContainerSaga() {
  yield takeLatest(GET_CATEGORIES, getCategories);
}

function* getCategories() {
  try {
    const profileId = yield select(makeSelectProfileId);
    const plParam = yield select(makeSelectPlaylistParam);
    const url = getUrl(profileId, plParam || 0);
    const { categories2, playlist } = yield call(getCatsRequest, url);
    yield put(getCategoriesCompleted(categories2));
    yield put(setPlaylist(playlist));
  } catch (error) {
    yield put(getCategoriesCompleted([]));
    yield put(setError(error.message));
  }
}

function getUrl(profileId, plidParam) {
  return `https://thread-204819.appspot.com/getPlaylists/${profileId}/${plidParam}`;
}

function getCatsRequest(url) {
  return axios({
    method: 'get',
    url,
    withCredentials: true,
  })
    .then(categories => categories.data)
    .catch(err => {
      throw err;
    });
}
/*

function getPlaylistRequest(plParam) {
  if (plParam) {
    return axios({
      method: 'get',
      url: `https://thread-204819.appspot.com/getPlaylist/${plParam}`,
      withCredentials: true,
    })
      .then(result => result.data)
      .catch(err => {
        throw new Error(err.message);
      });
  }
  return undefined;
}
*/
