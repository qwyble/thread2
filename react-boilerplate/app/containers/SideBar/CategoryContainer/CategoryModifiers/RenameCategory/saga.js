import axios from 'axios';
import { fromJS } from 'immutable';
import { call, takeLatest, put } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { setSuccess } from 'containers/Wrappers/SuccessWrapper/actions';

import { setEditedCategory } from 'containers/SideBar/CategoryContainer/CategoryModifiers/EditCategoryPortal/actions';

import { editCategorySuccess, editCategoryFailed } from './actions';
import { EDIT_CATEGORY } from './constants';

export default function* sideBarSaga() {
  yield takeLatest(EDIT_CATEGORY, editCategory);
}

function* editCategory(action) {
  try {
    yield call(editCategoryRequest, action.category);
    yield put(editCategorySuccess(action.category));
    yield put(setSuccess('Category renamed.'));
    yield put(setEditedCategory(fromJS({}), -1));
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
