import { call, takeLatest, put, select } from 'redux-saga';
import axios from 'axios';
import { GET_CATEGORIES } from './constants';
import { getCatsSuccess, getCatsFailed } from './actions';
import { makeSelectProfileId } from '../../../appUtilities/ProfileContext/selectors';


export default function* sideBarSaga() {
  yield takeLatest(GET_CATEGORIES, getCategories);
}

function* getCategories() {
  try {
    const profileId = yield select(makeSelectProfileId);
    const url = getUrl(profileId);
    const cats = yield call(getCatsRequest, url);
    yield put(getCatsSuccess, cats);
  } catch (error) {
    yield put(getCatsFailed, error);
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

