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
});

export default function renamePlaylistReducer(state = initialState, action) {
  switch (action.type) {
    case (RENAME_PLAYLIST):
      return state
        .set('isLoading', true)
        .set('error', blankError);
    case (RENAME_PLAYLIST_SUCCESS):
      return state
        .set('isLoading', false)
    case (RENAME_PLAYLIST_FAILED):
      return state
        .set('isLoading', false)
        .set('error', fromJS(action.error))
    default:
      return state;
  }
}
