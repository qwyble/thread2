import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { GET_USERS, SEND_MESSAGE } from './constants';
import {
  getUsersCompleted,
  sendMessageCompleted,
  sendMessageFailed,
} from './actions';

export default function* MessageComposerSaga() {
  yield takeLatest(GET_USERS, getUsers);
  yield takeLatest(SEND_MESSAGE, sendMessage);
}

function* getUsers() {
  try {
    const users = yield call(getUsersRequest);
    yield put(getUsersCompleted(users));
  } catch (err) {
    yield put(setError(err.response.data || err.message));
  }
}

function* sendMessage(action) {
  try {
    const sentMessage = yield call(
      sendMessageRequest,
      action.subject,
      action.body,
      action.recipient
    );
    yield put(sendMessageCompleted(sentMessage));
  } catch (err) {
    yield put(setError(err.response.data || err.message));
    yield put(sendMessageFailed());
  }
}

function getUsersRequest() {
  return axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/emailSearch',
    withCredentials: true,
  })
    .then(result =>
      result.data.map(user => ({
        text: user.userName,
        image: user.imageUrl,
        key: user.idUsers,
        value: user.idUsers,
      }))
    )
    .catch(err => {
      throw err;
    });
}

function sendMessageRequest(subject, body, recipient) {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/sendMessage',
    data: {
      subject,
      body,
      recipient,
      date: new Date()
        .toISOString()
        .substring(0, 19)
        .replace('T', ' '),
    },
    withCredentials: true,
  })
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}
