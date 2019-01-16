import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { setSuccess } from 'containers/Wrappers/SuccessWrapper/actions';

import { GET_MESSAGES, DELETE_MESSAGES } from './constants';
import { makeSelectSelectedMessageIds } from './selectors';

import {
  getMessagesCompleted,
  getMessagesFailed,
  deleteMessagesCompleted,
  deleteMessagesFailed,
} from './actions';

export default function* MessagesContainerSaga() {
  yield takeLatest(GET_MESSAGES, getMessages);
  yield takeLatest(DELETE_MESSAGES, deleteMessages);
}

function* getMessages(action) {
  try {
    if (action.kind === 'inbox') {
      const messages = yield call(getInboxRequest);
      yield put(getMessagesCompleted(messages));
    } else {
      const messages = yield call(getSentRequest);
      yield put(getMessagesCompleted(messages));
    }
  } catch (err) {
    yield put(setError(err.message));
    yield put(getMessagesFailed());
  }
}

function* deleteMessages() {
  try {
    const messageIds = yield select(makeSelectSelectedMessageIds());
    yield call(deleteMessagesRequest, messageIds);
    yield put(deleteMessagesCompleted(messageIds));
    yield put(setSuccess('messages deleted'));
  } catch (err) {
    yield put(setError(err.message));
    yield put(deleteMessagesFailed());
  }
}

function getInboxRequest() {
  return axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/getMessages',
    withCredentials: true,
  })
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}

function getSentRequest() {
  return axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/getSentMessages',
    withCredentials: true,
  })
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}

function deleteMessagesRequest(messageIds) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/deleteMessages',
    data: {
      messages: messageIds,
    },
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}
