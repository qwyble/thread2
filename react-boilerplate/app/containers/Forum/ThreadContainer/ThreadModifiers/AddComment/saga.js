import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { makeSelectThreadId } from 'containers/Forum/ThreadContainer/ThreadContainer/selectors';

import { SUBMIT_COMMENT } from './constants';
import { submitCommentCompleted, submitCommentFailed } from './actions';

export default function* AddCommentSaga() {
  yield takeLatest(SUBMIT_COMMENT, submitComment);
}

function* submitComment(action) {
  try {
    const body = action.comment;
    const threadId = yield select(makeSelectThreadId());
    const date = new Date()
      .toISOString()
      .substring(0, 19)
      .replace('T', ' ');
    yield call(submitCommentRequest, body, threadId, date);
    yield put(submitCommentCompleted());
  } catch (err) {
    yield put(setError(err.message));
    yield put(submitCommentFailed());
  }
}

function submitCommentRequest(body, threadId, date) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/postComment',
    data: { comment: body, threadId, date },
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}
