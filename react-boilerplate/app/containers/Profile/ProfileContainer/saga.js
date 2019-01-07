import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { GET_USER, UPLOAD_IMAGE, EDIT_USER } from './constants';

import {
  getUserCompleted,
  getUserFailed,
  editUserCompleted,
  editUserFailed,
  uploadImageCompleted,
  uploadImageFailed,
} from './actions';

import { makeSelectUser } from './selectors';

export default function* ProfileContainerSaga() {
  yield takeLatest(GET_USER, getUser);
  yield takeLatest(UPLOAD_IMAGE, uploadImage);
  yield takeLatest(EDIT_USER, editUser);
}

function* getUser() {
  try {
    const user = yield call(getUserRequest);
    yield put(getUserCompleted(user));
  } catch (err) {
    yield put(setError(err.message));
    yield put(getUserFailed());
  }
}

function* editUser(action) {
  try {
    const user = yield select(makeSelectUser);
    const userName = action.username || user.get('userName');
    const email = action.email || user.get('email');
    yield call(editUserRequest, [userName, email]);
    user.set('userName', userName);
    user.set('email', email);
    yield put(editUserCompleted(user));
  } catch (err) {
    yield put(setError(err.message));
    yield put(editUserFailed());
  }
}

function* uploadImage(action) {
  try {
    yield call(uploadImageRequest, action.imageFile);
    yield put(uploadImageCompleted(action.imageUrl));
  } catch (err) {
    yield put(setError(err.message));
    yield put(uploadImageFailed());
  }
}

function getUserRequest() {
  return axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/getUserInfo',
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}

function editUserRequest(userName, email) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/editUserInfo',
    data: { email, userName },
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}

function uploadImageRequest(imageFile) {
  const data = new FormData();
  data.append('file', imageFile);
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/uploadImage',
    data,
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}
