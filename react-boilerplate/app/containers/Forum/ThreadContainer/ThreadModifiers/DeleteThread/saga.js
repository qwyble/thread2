import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { makeSelectThreadId } from 'containers/Forum/ThreadContainer/ThreadContainer/selectors';

import { DELETE_THREAD } from './constants';
import { deleteThreadCompleted, deleteThreadFailed } from './actions';

export default function* DeleteThreadSaga() {
  yield takeLatest(DELETE_THREAD, deleteThread);
}

function* deleteThread() {
  try {
    const threadId = yield select(makeSelectThreadId());
    yield call(deleteThreadRequest, threadId);
    yield put(deleteThreadCompleted());
  } catch (err) {
    yield put(setError(err.message));
    yield put(deleteThreadFailed());
  }
}

function deleteThreadRequest(id) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/deleteThread',
    data: { id },
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}
