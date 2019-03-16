import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { setSuccess } from 'containers/Wrappers/SuccessWrapper/actions';

import { postThreadCompleted, postThreadFailed } from './actions';
import { POST_THREAD } from './constants';

export default function* ThreadComposerSaga() {
  yield takeLatest(POST_THREAD, postThreads);
}

function* postThreads(action) {
  try {
    const thread = { ...action.thread };
    thread.date = new Date()
      .toISOString()
      .substring(0, 19)
      .replace('T', ' ');
    yield call(postThreadRequest, thread);
    yield put(postThreadCompleted());
    yield put(setSuccess('thread posted'));
    yield;
  } catch (err) {
    yield put(setError(err.message));
    yield put(postThreadFailed());
  }
}

function postThreadRequest(thread) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/postThread',
    data: {
      subject: thread.subject.value,
      body: thread.body.value,
      category: thread.category.value,
      date: thread.date,
    },
    withCredentials: true,
  }).then(result => result);
}
