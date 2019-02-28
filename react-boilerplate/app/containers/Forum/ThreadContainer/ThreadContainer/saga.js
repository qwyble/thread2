import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { SUBMIT_COMMENT_COMPLETED } from 'containers/Forum/ThreadContainer/ThreadModifiers/AddComment/constants';

import { GET_THREAD, GET_COMMENTS } from './constants';
import {
  getThreadCompleted,
  getThreadFailed,
  getComments,
  getCommentsCompleted,
  getCommentsFailed,
} from './actions';
import { makeSelectThreadId } from './selectors';

export default function* ThreadViewSaga() {
  yield takeLatest(GET_THREAD, getThreadSaga);
  yield takeLatest(GET_COMMENTS, getCommentsSaga);
  yield takeLatest(SUBMIT_COMMENT_COMPLETED, dispatchGetCommentSaga);
}

function* dispatchGetCommentSaga() {
  const threadId = yield select(makeSelectThreadId());
  yield put(getComments(threadId));
}

function* getThreadSaga(action) {
  try {
    const { threadId } = action;
    const thread = yield call(getThreadRequest, threadId);

    yield put(getThreadCompleted(thread[0]));
  } catch (err) {
    yield put(setError(err.message));
    yield put(getThreadFailed());
  }
}

function* getCommentsSaga(action) {
  try {
    const { threadId } = action;
    const comments = yield call(getCommentsRequest, threadId);

    yield put(getCommentsCompleted(comments));
  } catch (err) {
    yield put(setError(err.message));
    yield put(getCommentsFailed());
  }
}

function getThreadRequest(threadId) {
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

function getCommentsRequest(threadId) {
  return axios
    .get(`https://thread-204819.appspot.com/getComments/${threadId}`)
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}
