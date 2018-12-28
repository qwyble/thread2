import { fromJS } from 'immutable';

import {
  CLONE_PLAYLIST,
  CLONE_PLAYLIST_SUCCESS,
  CLONE_PLAYLIST_FAILED,
} from './constants';

const blankError = fromJS({});

const initialState = fromJS({
  isLoading: false,
  error: blankError,
  success: false,
});

export default function clonePortalReducer(state = initialState, action) {
  switch (action.type) {
    case CLONE_PLAYLIST:
      return state
        .set('isLoading', true)
        .set('error', blankError)
        .set(success, false);
    case CLONE_PLAYLIST_SUCCESS:
      return state.set('isLoading', false).set('success', true);
    case CLONE_PLAYLIST_FAILED:
      return state.set('isLoading', false).set('error', action.error);
    default:
      return state;
  }
}
