import { call, takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';

import {
  makeSelectProfileId,
  makeSelectIsOwner,
} from 'containers/AppUtilities/ProfileContext/selectors';

import { setPlaylist } from 'containers/SideBar/SideBarContainer/actions';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { makeSelectPlaylistParam } from './selectors';

import { GET_CATEGORIES } from './constants';
import { getCategoriesCompleted } from './actions';

export default function* CategoryContainerSaga() {
  yield takeLatest(GET_CATEGORIES, getCategories);
}

function* getCategories() {
  try {
    const plidParam = yield call(getPlParam);
    const profileId = yield call(getProfileId);
    console.log('prof id ', profileId);
    console.log(profileId, plidParam);
    const url = getUrl();
    console.log(url);
    const { categories2, playlist } = yield call(
      getCatsRequest,
      url,
      profileId,
      plidParam
    );
    yield put(getCategoriesCompleted(categories2));
    if (playlist) yield put(setPlaylist(playlist));
  } catch (error) {
    yield put(getCategoriesCompleted([]));
    yield put(setError(error.message));
  }
}

function* getProfileId() {
  const isOwner = yield select(makeSelectIsOwner());
  if (isOwner) return '0';
  return yield select(makeSelectProfileId());
}

function* getPlParam() {
  const plParam = yield select(makeSelectPlaylistParam());
  if (plParam) return plParam;
  return '0';
}

function getUrl() {
  return `https://thread-204819.appspot.com/getPlaylists`;
}

function getCatsRequest(url, profileId, plidParam) {
  return axios({
    method: 'get',
    url,
    params: {
      profileId,
      plidParam,
    },
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
