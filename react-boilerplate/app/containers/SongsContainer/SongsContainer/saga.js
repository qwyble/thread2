import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { GET_SONGS } from './constants';
import { getSongsSuccess, getSongsFailed } from './actions';
import { makeSelectCurrentPage, makeSelectUrl } from './selectors';

export default function* songsContainerSaga() {
  yield takeLatest(GET_SONGS, getSongs);
}

function* getSongs(action) {
  try {
    const songs = yield call(songsRequest, [action.sortBy, action.descending]);
    yield put(getSongsSuccess, songs);
  } catch (err) {
    yield put(getSongsFailed, err);
  }
}

function* songsRequest(sortBy, descending) {
  const url = yield select(makeSelectUrl);
  const currentPage = yield select(makeSelectCurrentPage);
  const sortByParam = sortBy || 'dateUploaded';
  const descendingParam = descending ? 'ASC' : 'DESC';

  return getSongsRequest(url, sortByParam, descendingParam, currentPage);
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
