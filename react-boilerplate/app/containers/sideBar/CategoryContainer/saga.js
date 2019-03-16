import { call, takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { makeSelectProfileId } from 'containers/AppUtilities/ProfileContext/selectors';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { GET_CATEGORIES } from './constants';
import { getCategoriesCompleted } from './actions';

export default function* CategoryContainerSaga() {
  yield takeLatest(GET_CATEGORIES, getCategories);
}

function* getCategories() {
  try {
    const profileId = yield select(makeSelectProfileId());
    const url = getUrl();
    const { categories2 } = yield call(getCatsRequest, url, profileId);
    yield put(getCategoriesCompleted(categories2));
  } catch (error) {
    yield put(getCategoriesCompleted([]));
    yield put(setError(error.message));
  }
}

function getUrl() {
  return `https://thread-204819.appspot.com/getPlaylists`;
}

function getCatsRequest(url, profileId) {
  return axios({
    method: 'get',
    url,
    params: { profileId },
    withCredentials: true,
  })
    .then(categories => categories.data)
    .catch(err => {
      throw err;
    });
}
