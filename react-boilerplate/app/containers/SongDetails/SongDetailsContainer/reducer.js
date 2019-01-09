import { fromJS } from 'immutable';

import {
  GET_SONG,
  GET_SONG_COMPLETED,
  GET_SONG_FAILED,
  DELETE_SONG,
  DELETE_SONG_COMPLETED,
  DELETE_SONG_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: true,
  song: {},
  didSucceed: false,
});

export default function SongDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SONG:
      return state.set('isLoading', true);
    case GET_SONG_COMPLETED:
      return state.set('isLoading', false).set('song', fromJS(action.song));
    case GET_SONG_FAILED:
      return state.set('isLoading', false);
    case DELETE_SONG:
      return state.set('isLoading', true);
    case DELETE_SONG_COMPLETED:
      return state.set('isLoading', false).set('didSucceed', true);
    case DELETE_SONG_FAILED:
      return state.get('isLoading', false);
    default:
      return state;
  }
}
