import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { authSuccess, authFailed } from './actions';
import { AUTH_ATTEMPT } from './constants';

export default function* rootSaga() {
  yield takeLatest(AUTH_ATTEMPT, auth);
}

function* auth(action) {
  const { creds, ext } = action;
  try {
    const userObj = yield call(authFunc, ext, creds);
    yield put(authSuccess(userObj));
  } catch (err) {
    yield put(authFailed());
    yield put(setError(err.message));
  }
}

function authFunc(ext, creds) {
  return axios({
    method: ext === 'session' ? 'get' : 'post',
    url: `https://thread-204819.appspot.com/auth/${ext}`,
    data: creds,
    withCredentials: true,
  })
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}
