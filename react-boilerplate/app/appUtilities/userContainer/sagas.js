import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { authSuccess, authFailed } from './actions';
import { AUTH } from './constants';


export default function* rootSaga() {
  yield takeLatest(AUTH, auth);
}

function* auth(action) {
  const { creds, ext } = action;
  try {
    const userObj = yield call(authFunc, [ext, creds]);
    yield put(authSuccess(userObj));
  } catch (err) {
    yield put(authFailed(err));
  }
}

function authFunc(ext, creds) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/auth/${ext}`,
    data: creds,
    withCredentials: true,
  }).then(result => result.data).catch((err) => {
    throw err;
  });
}
