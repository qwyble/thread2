import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import {
  deleteCategorySuccess,
  deleteCategoryFailed,
  deleteCategoryFromCats,
} from './actions';

import { DELETE_CATEGORY } from './constants';

export default function* sideBarSaga() {
  yield takeLatest(DELETE_CATEGORY, deleteCategory);
}

function* deleteCategory(action) {
  try {
    yield call(deleteCategoryRequest, action.catId);
    yield put(deleteCategorySuccess());
    yield put(deleteCategoryFromCats(action.catId));
  } catch (err) {
    yield put(deleteCategoryFailed);
    yield put(setError(err.message));
  }
}

function deleteCategoryRequest(id) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/deleteCategory',
    data: { catid: id },
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}
