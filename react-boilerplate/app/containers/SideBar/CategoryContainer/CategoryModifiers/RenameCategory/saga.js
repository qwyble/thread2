import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import {
  editCategorySuccess,
  editCategoryFailed,
  editCategoryInCats,
} from './actions';

import { EDIT_CATEGORY } from './constants';

export default function* sideBarSaga() {
  yield takeLatest(EDIT_CATEGORY, editCategory);
}

function* editCategory(action) {
  try {
    yield call(editCategoryRequest, action.category);
    yield put(editCategorySuccess());
    yield put(editCategoryInCats(action.category));
  } catch (err) {
    yield put(editCategoryFailed());
    yield put(setError(err.message));
  }
}

function editCategoryRequest(category) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/renameCat',
    data: category,
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}
