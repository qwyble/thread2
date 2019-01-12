import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { GET_FEED } from './constants';

import { getFeedCompleted, getFeedFailed } from './actions';

export default function* ForumFeedContainerSaga() {
  yield takeLatest(GET_FEED, getFeed);
}

function* getFeed() {
  try {
    const feedEvents = yield call(getFeedRequest);
    yield put(getFeedCompleted(feedEvents));
  } catch (err) {
    yield put(setError(err.response.data || err.message));
    yield put(getFeedFailed());
  }
}

function getFeedRequest() {
  return axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/getForumFeed',
    withCredentials: true,
  })
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
}
