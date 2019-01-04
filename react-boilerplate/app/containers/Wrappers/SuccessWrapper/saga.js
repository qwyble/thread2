import { put, takeLatest, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { SET_SUCCESS } from './constants';
import { removeSuccess } from './actions';

export default function* successSaga() {
  yield takeLatest(SET_SUCCESS, successDelay);
}

function* successDelay() {
  yield call(delay, 5000);
  yield put(removeSuccess());
}
