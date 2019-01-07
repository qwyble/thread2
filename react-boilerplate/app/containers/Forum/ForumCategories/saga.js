import { call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { GET_CATEGORIES } from './constants';
import { getCategoriesCompleted } from './actions';

export default function* CategoryContainerSaga() {
  yield takeLatest(GET_CATEGORIES, getCategories);
}

function* getCategories() {
  try {
    const categories = yield call(getCatsRequest);
    yield put(getCategoriesCompleted(categories));
  } catch (error) {
    yield put(getCategoriesCompleted([]));
    yield put(setError(error.message));
  }
}

function getCatsRequest() {
  return axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/getForumCategories',
    params: { searchstring: '%' },
  })
    .then(result =>
      result.data.map(cat => ({
        text: cat.category,
        key: cat.idthreadcategories,
        value: cat.idthreadcategories,
      }))
    )
    .catch(err => {
      throw err;
    });
}
