import axios from 'axios';
import { fromJS } from 'immutable';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { addCommentToThread } from 'containers/Forum/ThreadContainer/ThreadContainer/actions';

import { makeSelectThreadIdParam } from 'containers/Forum/ThreadContainer/ThreadContainer/selectors';
import { makeSelectUser } from 'containers/AppUtilities/UserContainer/selectors';

import { SUBMIT_COMMENT } from './constants';
import { submitCommentCompleted, submitCommentFailed } from './actions';

export default function* AddCommentSaga() {
  yield takeLatest(SUBMIT_COMMENT, submitComment);
}

function* submitComment(action) {
  try {
    const body = action.comment;
    const threadId = yield select(makeSelectThreadIdParam);
    const date = new Date()
      .toISOString()
      .substring(0, 19)
      .replace('T', ' ');
    yield call(submitCommentRequest, [body, threadId, date]);
    const user = yield select(makeSelectUser);
    const comment = fromJS({
      userName: user.userName,
      imageUrl: user.imageUrl,
      date,
      body,
    });
    yield put(submitCommentCompleted());
    yield put(addCommentToThread(comment));
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
