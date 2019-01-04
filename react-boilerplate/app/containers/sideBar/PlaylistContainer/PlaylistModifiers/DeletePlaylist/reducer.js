import { fromJS } from 'immutable';

import {
  DELETE_PLAYLIST,
  DELETE_PLAYLIST_FAILED,
  DELETE_PLAYLIST_SUCCESS,
} from './constants';

const initialState = fromJS({
  isLoading: true,
  didDelete: false,
});

export default function deletePlaylistReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_PLAYLIST:
      return state.set('isLoading', true);
    case DELETE_PLAYLIST_SUCCESS:
      return state.set('isLoading', false).set('didDelete', true);
    case DELETE_PLAYLIST_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
