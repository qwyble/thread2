import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';
import { GET_PROFILE } from './constants';
import {
  getProfileFailed,
  getProfileSuccess,
} from './actions';


export default function* rootSaga() {
  yield takeLatest(GET_PROFILE, getProfile);
}

/*

function* getCategories(action) {
  try {
    const url = yield call(getUrl, action.profileId);
    const { cats, owner } = yield call(getCatsRequest, url);
    yield put(getCatsSuccess, [cats, owner]);
  } catch (error) {
    yield put(getCatsFailed, error);
  }
}
*/
function* getProfile(action) {
  try {
    const profile = yield call(getProfileRequest, action.profileId);
    yield put(getProfileSuccess, profile);
  } catch (error) {
    yield put(getProfileFailed, error);
  }
}

function getProfileRequest(profileId) {
  return axios({
    method: 'get',
    url: `https://thread-204819.appspot.com/getProfile/${profileId}`,
    withCredentials: true,
  }).then(response => response.data).catch((err) => {
    throw new Error(err);
  });
}


/*

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
*/


