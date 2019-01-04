import { fromJS } from 'immutable';

import {
  ADD_PLAYLIST,
  ADD_PLAYLIST_FAILED,
  ADD_PLAYLIST_SUCCESS,
} from './constants';

const initialState = fromJS({
  isLoading: true,
});

export default function addPlaylistReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYLIST:
      return state.set('isLoading', true);
    case ADD_PLAYLIST_SUCCESS:
      return state.set('isLoading', false);
    case ADD_PLAYLIST_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
