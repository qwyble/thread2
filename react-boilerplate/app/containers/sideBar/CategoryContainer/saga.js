import { call, takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { GET_CATEGORIES } from './constants';
import {
  getCategoriesSuccess,
  getCategoriesFailed,
} from './actions';
import { makeSelectProfileId } from '../../../appUtilities/ProfileContext/selectors';

export default function* CategoryContainerSaga() {
  yield takeLatest(GET_CATEGORIES, getCategories);
}

function* getCategories() {
  try {
    const profileId = yield select(makeSelectProfileId);
    const url = getUrl(profileId);
    const cats = yield call(getCatsRequest, url);
    yield put(getCategoriesSuccess, cats);
  } catch (error) {
    yield put(getCategoriesFailed, error);
  }
}


function getUrl(profileId) {
  return `https://thread-204819.appspot.com/getPlaylists/${profileId}`;
}


function getCatsRequest(url) {
  return axios({
    method: 'get',
    url,
    withCredentials: true,
  }).then((categories) => {
    const catpls = categories.data;
    const categories2 = Object.values(
      catpls.reduce((cats, { catname, catid, plname, plid, isPublic }) => {
        if (!(catid in cats)) { cats[catid] = { catname, catid, pls: [] }; }
        if (plid) { cats[catid].pls.push({ plname, plid, isPublic }); }
        return cats;
      }, {})
    );
    return categories2;
  }).catch((err) => {
    throw new Error(err);
  });
}
