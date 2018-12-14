import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';
import { GET_CATS, SET_PROFILE, GET_PROFILE } from './constants';
import {
  getCats,
  getCatsFailed,
  getCatsSuccess,
  getProfileFailed,
  getProfileSuccess,
} from './actions';


export default function* rootSaga() {
  yield takeLatest(GET_CATS, getCategories);
  yield takeLatest(GET_PROFILE, getProfile);
  yield takeLatest(SET_PROFILE, getCategories);
}


function* getCategories(action) {
  try {
    const url = yield call(getUrl, action.profileId);
    const { cats, owner } = yield call(getCatsRequest, url);
    yield put(getCatsSuccess, [cats, owner]);
  } catch (error) {
    yield put(getCatsFailed, error);
  }
}

function* getProfile(action) {
  try {
    const profile = yield call(getProfileRequest, action.profileId);
    yield put(getProfileSuccess, profile);
    yield put(getCats, action.profileId);
  } catch (error) {
    yield put(getProfileFailed, error);
  }
}


function getUrl(profileId) {
  if (profileId) return `https://thread-204819.appspot.com/getPlaylists/${profileId}`;
  return 'https://thread-204819.appspot.com/getPlaylists';
}


function getCatsRequest(url) {
  return axios({
    method: 'get',
    url,
    withCredentials: true,
  }).then((categories) => {
    const catpls = categories.data.cats;
    const cats = Object.values(
      catpls.reduce((cats, { catname, catid, plname, plid, isPublic }) => {
        if (!(catid in cats)) { cats[catid] = { catname, catid, pls: [] }; }
        if (plid) { cats[catid].pls.push({ plname, plid, isPublic }); }
        return cats;
      }, {})
    );
    return cats;
  });
}


function getProfileRequest()
