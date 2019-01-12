import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setError } from 'containers/Wrappers/ErrorWrapper';
import { RATE_SONG } from './constants';
import { rateSongCompleted, changeRating } from './actions';

export default function* rateSongSaga() {
  yield takeLatest(RATE_SONG, rateSong);
}

function* rateSong(action) {
  try {
    const { idSongs, rating } = { ...action };
    yield call(rateSongRequest, idSongs, rating);
    yield put(rateSongCompleted());
    yield put(changeRating(idSongs, rating));
  } catch (err) {
    yield put(rateSongCompleted());
    yield put(setError(err.response.data || err.message));
  }
}

function rateSongRequest() {
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/rateSong',
    data: {
      songId: this.props.song.idSongs,
      rating: this.state.rating,
    },
    withCredentials: true,
  }).catch(err => {
    throw err;
  });
}
