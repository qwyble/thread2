import axios from 'axios';
import { call, takeLatest, all, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { GET_THREAD } from './constants';
import { makeSelectThreadIdParam } from './selectors';
import { getThreadCompleted, getThreadFailed } from './actions';

export default function* ThreadViewSaga() {
  yield takeLatest(GET_THREAD, getThread);
}

function* getThread() {
  try {
    const threadId = yield select(makeSelectThreadIdParam());
    const [thread, comments] = yield all([
      call(getThreadRequest, threadId),
      call(getCommentsRequest, threadId),
    ]);
    yield put(getThreadCompleted(thread, comments));
  } catch (err) {
    yield put(setError(err.message));
    yield put(getThreadFailed());
  }
}

function* getThreadRequest(threadId) {
  return axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/getThread',
    params: {
      id: threadId,
    },
  })
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}

function* getCommentsRequest(threadId) {
  return axios
    .get(`https://thread-204819.appspot.com/getComments/${threadId}`)
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}
