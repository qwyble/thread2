import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { GET_MESSAGE } from './constants';
import { getMessageCompleted, getMessageFailed } from './actions';

import { makeSelectMessageId } from './selectors';

export default function* MessageViewContainerSaga() {
  yield takeLatest(GET_MESSAGE, getMessage);
}

function* getMessage() {
  try {
    const messageId = yield select(makeSelectMessageId);
    const message = yield call(getMessageRequest, messageId);
    yield put(getMessageCompleted(message));
  } catch (err) {
    yield put(setError(err.message));
    yield put(getMessageFailed());
  }
}

function getMessageRequest(messageId) {
  return axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/getMessage',
    params: {
      id: messageId,
    },
    withCredentials: true,
  });
}
