import axios from 'axios';
import { call, takeLatest, put, select } from 'redux-saga/effects';

import { makeSelectSelectedCategory } from 'containers/Forum/ForumCategories/selectors';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { GET_THREADS } from './constants';
import { getThreadsCompleted } from './actions';
import { makeSelectThreads } from './selectors';

export default function* ThreadsContainerSaga() {
  yield takeLatest(GET_THREADS, getThreads);
}

function* getThreads() {
  try {
    const selectedCat = yield select(makeSelectSelectedCategory());
    const threads = yield call(getThreadsRequest, selectedCat);
    yield put(getThreadsCompleted(threads));
  } catch (err) {
    yield put(setError(err.message));
    const oldThreads = yield select(makeSelectThreads);
    yield put(getThreadsCompleted(oldThreads));
  }
}

function getThreadsRequest(selectedCat) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/getThreads/${selectedCat || 'all'}`,
  })
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
}
