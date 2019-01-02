import { select, takeLatest, put, call } from 'redux-saga/effects';

import { HANDLE_END, HANDLE_SKIP_BACK } from './constants';
import { makeSelectNextSong, makeSelectPrevSong } from './selectors';
import { handlePlaying } from './actions';

export default function* audioPlaybackSaga() {
  yield takeLatest(HANDLE_END, handleEnd);
  yield takeLatest(HANDLE_SKIP_BACK, handleSkipBack);
}

function* handleEnd() {
  const nextSong = yield select(makeSelectNextSong);
  if (nextSong) {
    yield put(handlePlaying, nextSong);
  }
}

function* handleSkipBack() {
  const prevSong = yield select(makeSelectPrevSong);
  if (prevSong) {
    yield put(handlePlaying, prevSong);
  }
}
