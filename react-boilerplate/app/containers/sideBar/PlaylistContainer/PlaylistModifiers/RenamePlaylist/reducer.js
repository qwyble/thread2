import { fromJS } from 'immutable';

import {
  RENAME_PLAYLIST,
  RENAME_PLAYLIST_FAILED,
  RENAME_PLAYLIST_SUCCESS,
} from './constants';

const blankError = fromJS({});

const initialState = fromJS({
  isLoading: true,
  error: blankError,
  didRename: false,
});

export default function renamePlaylistReducer(state = initialState, action) {
  switch (action.type) {
    case RENAME_PLAYLIST:
      return state.set('isLoading', true);
    case RENAME_PLAYLIST_SUCCESS:
      return state.set('isLoading', false).set('didRename', true);
    case RENAME_PLAYLIST_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
