import { call, takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { setIsPublic } from 'containers/SideBar/CategoryContainer/actions';
import { setError } from 'containers/Wrappers/ErrorWrapper/actions';

import { makeSelectSelectedPlid } from 'containers/SideBar/PlaylistContainer/selectors';

import { makePublicComplete } from './actions';

import { MAKE_PUBLIC } from './constants';

import { makeSelectIsPublic } from './selectors';

export default function* publicitySaga() {
  yield takeLatest(MAKE_PUBLIC, makePublic);
}

function* makePublic() {
  const isPublic = yield select(makeSelectIsPublic);
  const plid = yield select(makeSelectSelectedPlid);
  try {
    if (isPublic) yield call(makePrivateRequest, plid);
    else yield call(makePublicRequest, plid);
    yield put(makePublicComplete());
    yield put(setIsPublic(!isPublic, plid));
  } catch (err) {
    yield put(makePublicComplete());
    yield put(setError(err.message));
  }
}

function makePrivateRequest(plid) {
  return axios
    .post(getUrl('makePrivate'), {
      plid,
      withCredentials: true,
    })
    .catch(err => {
      throw err;
    });
}

function makePublicRequest(plid) {
  return axios
    .post(getUrl('makePublic'), {
      plid,
      withCredentials: true,
    })
    .catch(err => {
      throw err;
    });
}

const getUrl = slug => `https://thread-204819.appspot.com/${slug}`;
