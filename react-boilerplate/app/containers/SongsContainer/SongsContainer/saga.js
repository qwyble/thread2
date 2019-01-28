import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import {
  makeSelectPathnameRoot,
  makeSelectProfileParam,
  makeSelectPlaylistParam,
} from 'containers/AppUtilities/ProfileContext/selectors';
import { RESET_LIST } from 'containers/Audio/PlaybackContainer/constants';
import {
  handleEnd,
  startFromEnd,
} from 'containers/Audio/PlaybackContainer/actions';

import { GET_SONGS, SORT_BY, SET_CURRENT_PAGE } from './constants';
import {
  setIsLoading,
  getSongsSuccess,
  getSongsFailed,
  sortByReduction,
  setCurrentItemReduction,
} from './actions';
import {
  makeSelectCurrentItem,
  makeSelectSortBy,
  makeSelectDescending,
  makeSelectTotalPages,
} from './selectors';

export default function* songsContainerSaga() {
  yield takeLatest(GET_SONGS, getSongs);
  yield takeLatest(SORT_BY, sort);
  yield takeLatest(SET_CURRENT_PAGE, setCurrentItem);
  yield takeLatest(RESET_LIST, resetList);
}

function* setCurrentItem(action) {
  yield put(setCurrentItemReduction(action.page));
  yield put(setIsLoading());
  yield call(getSongs);
}

function* sort(action) {
  yield put(sortByReduction(action.sortParam));
  yield put(setIsLoading());
  yield call(getSongs);
}

function* resetList(action) {
  const currentItem = yield select(makeSelectCurrentItem());
  const totalPages = yield select(makeSelectTotalPages());
  if (action.direction === 'forward')
    yield call(resetForward, currentItem, totalPages);
  else if (action.direction === 'backward')
    yield call(resetBackward, currentItem, totalPages);
}

function* resetForward(currentItem, totalPages) {
  let page = currentItem + 20;
  if (page / 20 < totalPages) {
    yield call(setCurrentItem, { page });
    yield put(handleEnd());
  } else {
    page = 0;
    yield call(setCurrentItem, { page });
    yield put(handleEnd());
  }
}

function* resetBackward(currentItem, totalPages) {
  let page = currentItem - 20;
  if (page / 20 >= 0) {
    yield call(setCurrentItem, { page });
    yield put(startFromEnd());
  } else {
    page = totalPages * 20 - 20;
    yield call(setCurrentItem, { page });
    yield put(startFromEnd());
  }
}

function* getSongs() {
  try {
    const data = yield call(songsRequest);
    const songs = data[0];
    const { count } = { ...data[1][0] };
    yield put(getSongsSuccess(songs, count));
  } catch (err) {
    yield put(getSongsFailed());
    yield put(setError(err.message));
  }
}

function* getUrl() {
  const path = yield select(makeSelectPathnameRoot());
  const pathParam = yield call(getParam, path);
  if (path.length < 2) return 'https://thread-204819.appspot.com/stream';
  if (path === 'stream') return 'https://thread-204819.appspot.com/stream';
  return `https://thread-204819.appspot.com/${path}/${pathParam}`;
}

function* getParam(path) {
  if (path === 'profile') return yield select(makeSelectProfileParam());
  if (path === 'playlist') return yield select(makeSelectPlaylistParam());
  return undefined;
}

function* songsRequest() {
  const url = yield call(getUrl);
  const CurrentItem = yield select(makeSelectCurrentItem());
  const sortByParam = yield select(makeSelectSortBy());
  const descendingParam = yield select(makeSelectDescending());
  console.log(descendingParam);

  return yield call(
    getSongsRequest,
    url,
    sortByParam,
    descendingParam,
    CurrentItem
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
    .then(result => result.data)
    .catch(err => {
      throw new Error(err);
    });
