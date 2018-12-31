import { put, takeLatest, delay } from 'redux-saga/effects';
import { SET_ERROR } from './constants';
import { removeError } from './actions';

export default function* errorSaga() {
  yield takeLatest(SET_ERROR, errorDelay);
}

function* errorDelay() {
  yield delay(1000);
  yield put(removeError);
}
