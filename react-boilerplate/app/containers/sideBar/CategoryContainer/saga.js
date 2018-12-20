import { call, takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
import {
  DELETE_CATEGORY_ATTEMPT,
  EDIT_CATEGORY_ATTEMPT,
  ADD_CATEGORY_ATTEMPT,
  GET_CATEGORIES
} from './constants';
import {
  deleteCategorySuccess,
  deleteCategoryFailed,
  getCategoriesSuccess,
  getCategoriesFailed,
  editCategorySuccess,
  editCategoryFailed,
  addCategorySuccess,
  addCategoryFailed,
  categoryAttempt,
} from './actions';
import { makeSelectProfileId } from '../../../appUtilities/ProfileContext/selectors';

export default function* sideBarSaga() {
  yield takeLatest(GET_CATEGORIES, getCategories);
  yield takeLatest(ADD_CATEGORY_ATTEMPT, addCategory);
  yield takeLatest(DELETE_CATEGORY_ATTEMPT, deleteCategory);
  yield takeLatest(EDIT_CATEGORY_ATTEMPT, editCategory);
}

function* getCategories() {
  try {
    const profileId = yield select(makeSelectProfileId);
    const url = getUrl(profileId);
    const cats = yield call(getCatsRequest, url);
    yield put(getCategoriesSuccess, cats);
  } catch (error) {
    yield put(getCategoriesFailed, error);
  }
}

function* addCategory(action) {
  try {
    yield put(categoryAttempt);
    const category = yield call(addCatRequest, action.category);
    yield put(addCategorySuccess, category);
  } catch (err) {
    yield put(addCategoryFailed, err);
  }
}

function* deleteCategory(action) {
  try {
    yield put(categoryAttempt);
    yield call(deleteCategoryRequest, action.catId);
    yield put(deleteCategorySuccess, action.catId);
  } catch (err) {
    yield put(deleteCategoryFailed, err);
  }
}

function* editCategory(action) {
  try {
    yield put(categoryAttempt);
    yield call(editCategoryRequest, action.category);
    yield put(editCategorySuccess, action.category);
  } catch (err) {
    yield put(editCategoryFailed, err);
  }
}


function getUrl(profileId) {
  return `https://thread-204819.appspot.com/getPlaylists/${profileId}`;
}


function getCatsRequest(url) {
  return axios({
    method: 'get',
    url,
    withCredentials: true,
  }).then((categories) => {
    const catpls = categories.data;
    const categories2 = Object.values(
      catpls.reduce((cats, { catname, catid, plname, plid, isPublic }) => {
        if (!(catid in cats)) { cats[catid] = { catname, catid, pls: [] }; }
        if (plid) { cats[catid].pls.push({ plname, plid, isPublic }); }
        return cats;
      }, {})
    );
    return categories2;
  }).catch((err) => {
    throw new Error(err);
  });
}

function addCatRequest(category) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/addCategory',
    data: { category },
    withCredentials: true,
  }).then(result => result.data).catch((err) => {
    throw new Error(err);
  });
}

function deleteCategoryRequest(id) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/deleteCategory',
    data: { catid: id },
    withCredentials: true
  }).catch((err) => {
    throw new Error(err);
  });
}

function editCategoryRequest(category) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/renameCat',
    data: category,
    withCredentials: true
  }).catch((err) => {
    throw new Error(err);
  });
}
