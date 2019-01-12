import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { makeSelectThreadIdParam } from 'containers/Forum/ThreadContainer/ThreadContainer/selectors';

import { GET_SUBSCRIBED, SUBSCRIBE } from './constants';

import {
  getSubscribedCompleted,
  getSubscribedFailed,
  subscribeCompleted,
  subscribeFailed,
} from './actions';

import { makeSelectIsSubscribed } from './selectors';

export default function* SubscribeSaga() {
  yield takeLatest(GET_SUBSCRIBED, getSubscribed);
  yield takeLatest(SUBSCRIBE, subscribe);
}

function* getSubscribed() {
  try {
    const threadId = yield select(makeSelectThreadIdParam);
    const subbed = yield call(getSubscribedRequest, threadId);
    yield put(getSubscribedCompleted(subbed));
  } catch (err) {
    yield put(setError(err.response.data || err.message));
    yield put(getSubscribedFailed());
  }
}
function* subscribe() {
  try {
    const threadId = yield select(makeSelectThreadIdParam);
    const subbed = yield select(makeSelectIsSubscribed);
    yield call(subscribeRequest, threadId, subbed);
    yield put(subscribeCompleted());
  } catch (err) {
    yield put(setError(err.response.data || err.message));
    yield put(subscribeFailed());
  }
}

function getSubscribedRequest(threadId) {
  return axios
    .get(`https://thread-204819.appspot.com/getSubscribed/${threadId}`, {
      withCredentials: true,
    })
    .then(result => result.data.length)
    .catch(err => {
      throw err;
    });
}

function subscribeRequest(threadId, subscribed) {
  let subbed = 'sub';
  if (subscribed) subbed = 'unsub';
  else subbed = 'sub';
  return axios({
    method: 'post',
    url: `https://thread-204819.appspot.com/subscribe/${subbed}`,
    data: {
      threadId,
    },
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}
