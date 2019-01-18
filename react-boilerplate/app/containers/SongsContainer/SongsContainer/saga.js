import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { makeSelectPathnameRoot } from 'containers/AppUtilities/ProfileContext/selectors';
import {
  GET_SONGS,
  SORT_BY,
  SET_DESCENDING,
  SET_CURRENT_PAGE,
} from './constants';
import {
  getSongsSuccess,
  getSongsFailed,
  sortByReduction,
  setDescendingReduction,
  setCurrentPageReduction,
} from './actions';
import {
  makeSelectCurrentPage,
  makeSelectSortBy,
  makeSelectDescending,
} from './selectors';

export default function* songsContainerSaga() {
  yield takeLatest(GET_SONGS, getSongs);
  yield takeLatest(SORT_BY, sort);
  yield takeLatest(SET_DESCENDING, setDescending);
  yield takeLatest(SET_CURRENT_PAGE, setCurrentPage);
}

function* setCurrentPage(action) {
  yield put(setCurrentPageReduction(action.page));
  yield call(getSongs);
}

function* setDescending() {
  yield put(setDescendingReduction());
  yield call(getSongs);
}

function* sort(action) {
  yield put(sortByReduction(action.sortParam));
  yield call(getSongs);
}

function* getSongs() {
  try {
    const songs = yield call(songsRequest);
    yield put(getSongsSuccess(songs));
  } catch (err) {
    yield put(getSongsFailed());
    yield put(setError(err.message));
  }
}

function* getUrl() {
  const path = yield select(makeSelectPathnameRoot());
  if (path.length < 2) return 'https://thread-204819.appspot.com/stream';
  return `https://thread-204819.appspot.com/${path}`;
}

function* songsRequest() {
  const url = yield call(getUrl);
  const currentPage = yield select(makeSelectCurrentPage());
  const sortByParam = yield select(makeSelectSortBy());
  const descendingParam = yield select(makeSelectDescending());

  return yield call(
    getSongsRequest,
    url,
    sortByParam,
    descendingParam,
    currentPage
  );
}

const getSongsRequest = (url, sortBy, descending, currentItem) =>
  axios
    .get(url, {
      params: {
        sortBy,
        descending,
        currentItem,
      },
      withCredentials: true,
    })
    .then(result => result.data[0])
    .catch(err => {
      throw new Error(err);
    });
