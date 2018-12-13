import axios from 'axios';
import { call, takeLatest, put } from 'redux-saga/effects';
import { GET_CATS } from './constants';
import { getCatsSuccess, getCatsFailed } from './actions';


export default function* rootSaga() {
  yield takeLatest(GET_CATS, getCategories);
}


function* getCategories(action) {
  const url = yield call(getUrl, action.profile);

}


function getUrl(profile) {
  if (profile.length) {
    return 'https://thread-204819.appspot.com/getPlaylists/' + profile
  }
}
