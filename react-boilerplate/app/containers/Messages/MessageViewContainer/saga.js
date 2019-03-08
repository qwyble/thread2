import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { GET_MESSAGE } from './constants';
import { getMessageCompleted, getMessageFailed } from './actions';

export default function* MessageViewContainerSaga() {
  yield takeLatest(GET_MESSAGE, getMessage);
}

function* getMessage(action) {
  try {
    const { messageId } = action;
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
  })
    .then(result => result.data[0])
    .catch(err => {
      throw err;
    });
}
