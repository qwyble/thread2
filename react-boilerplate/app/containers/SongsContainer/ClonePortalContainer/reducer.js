import { fromJS } from 'immutable';

import {
  CLONE_PLAYLIST,
  CLONE_PLAYLIST_SUCCESS,
  CLONE_PLAYLIST_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  didSucceed: false,
});

export default function clonePortalReducer(state = initialState, action) {
  switch (action.type) {
    case CLONE_PLAYLIST:
      return state.set('isLoading', true).set('didSucceed', false);
    case CLONE_PLAYLIST_SUCCESS:
      return state.set('isLoading', false).set('didSucceed', true);
    case CLONE_PLAYLIST_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
