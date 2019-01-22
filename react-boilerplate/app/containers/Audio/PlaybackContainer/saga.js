import { select, takeLatest, put } from 'redux-saga/effects';

import { HANDLE_END, HANDLE_SKIP_BACK, START_FROM_END } from './constants';
import {
  makeSelectNextSong,
  makeSelectPrevSong,
  makeSelectLastSong,
} from './selectors';
import { handlePlaying, resetList } from './actions';

export default function* audioPlaybackSaga() {
  yield takeLatest(HANDLE_END, handleEnd);
  yield takeLatest(HANDLE_SKIP_BACK, handleSkipBack);
  yield takeLatest(START_FROM_END, startFromEnd);
}

function* handleEnd() {
  const nextSong = yield select(makeSelectNextSong());
  if (nextSong) yield put(handlePlaying(nextSong));
  else yield put(resetList('forward'));
}

function* handleSkipBack() {
  const prevSong = yield select(makeSelectPrevSong());
  if (prevSong) yield put(handlePlaying(prevSong));
  else yield put(resetList('backward'));
}

function* startFromEnd() {
  const lastSong = yield select(makeSelectLastSong());
  if (lastSong) yield put(handlePlaying(lastSong));
}
