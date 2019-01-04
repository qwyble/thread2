import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { ADD_CATEGORY } from './constants';

import {
  addCategorySuccess,
  addCategoryFailed,
  addCategoryToCats,
} from './actions';

export default function* sideBarSaga() {
  yield takeLatest(ADD_CATEGORY, addCategory);
}

function* addCategory(action) {
  try {
    const category = yield call(addCatRequest, action.category);
    yield put(addCategorySuccess());
    yield put(addCategoryToCats(category));
  } catch (err) {
    yield put(addCategoryFailed());
    yield put(setError(err.message));
  }
}

function addCatRequest(category) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/addCategory',
    data: { category },
    withCredentials: true,
  })
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}
