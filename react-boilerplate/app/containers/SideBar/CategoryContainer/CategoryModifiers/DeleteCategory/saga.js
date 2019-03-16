import axios from 'axios';
import { fromJS } from 'immutable';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { setSuccess } from 'containers/Wrappers/SuccessWrapper/actions';
import { makeSelectEditedCategoryId } from 'containers/SideBar/CategoryContainer/CategoryModifiers/EditCategoryPortal/selectors';
import { setEditedCategory } from 'containers/SideBar/CategoryContainer/CategoryModifiers/EditCategoryPortal/actions';
import { deleteCategorySuccess, deleteCategoryFailed } from './actions';

import { DELETE_CATEGORY } from './constants';

export default function* sideBarSaga() {
  yield takeLatest(DELETE_CATEGORY, deleteCategory);
}

function* deleteCategory() {
  try {
    const catid = yield select(makeSelectEditedCategoryId());
    yield call(deleteCategoryRequest, catid);
    yield put(deleteCategorySuccess(catid));
    yield put(setSuccess('Category deleted.'));
    yield put(setEditedCategory(fromJS({}), -1));
  } catch (err) {
    yield put(deleteCategoryFailed);
    yield put(setError(err.message));
    yield put(setEditedCategory(fromJS({}), -1));
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
