import { call, takeLatest, put, select } from 'redux-saga/effects';

import { setError } from 'containers/Wrappers/ErrorWrapper/actions';
import { setSuccess } from 'containers/Wrappers/SuccessWrapper/actions';

import { addSongToStream } from 'containers/SongsContainer/SongsContainer/actions';
import { makeSelectIsStream } from 'containers/Wrappers/PathWrapper/selectors';

import { UPLOAD_SONG } from './constants';

import { uploadSongCompleted, uploadSongFailed } from './actions';

export default function* UploaderSaga() {
  yield takeLatest(UPLOAD_SONG, uploadSong);
}

function* uploadSong(action) {
  try {
    const { songFields } = { ...action.songFields };

    const song = yield call(uploadSongRequest, songFields);
    yield put(uploadSongCompleted());
    yield put(setSuccess('song uploaded'));
    if (yield select(makeSelectIsStream)) {
      yield put(addSongToStream(song));
    }
  } catch (err) {
    yield put(setError(err.message));
    yield put(uploadSongFailed());
  }
}

function uploadSongRequest(songFields) {
  const data = new FormData();
  const { songFile, title, description, genre, songURL } = { ...songFields };
  data.append(songFile);
  data.append(title);
  data.append(description);
  data.append('genres', genre);
  data.append('URL', songURL);
  return axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/uploadSong',
    data,
    withCredentials: true,
  })
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
}
