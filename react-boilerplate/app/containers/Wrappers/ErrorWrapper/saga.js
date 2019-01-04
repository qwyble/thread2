import { put, takeLatest, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { SET_ERROR } from './constants';
import { removeError } from './actions';

export default function* errorSaga() {
  yield takeLatest(SET_ERROR, errorDelay);
}

function* errorDelay() {
  yield call(delay, 5000);
  yield put(removeError());
}
