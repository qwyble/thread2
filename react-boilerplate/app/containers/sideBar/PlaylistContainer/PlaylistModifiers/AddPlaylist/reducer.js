import { fromJS } from 'immutable';

import {
  ADD_PLAYLIST,
  ADD_PLAYLIST_FAILED,
  ADD_PLAYLIST_SUCCESS,
} from './constants';


const blankError = fromJS({});

const initialState = fromJS({
  isLoading: true,
  error: blankError,
});

export default function addPlaylistReducer(state = initialState, action) {
  switch (action.type) {
    case (ADD_PLAYLIST):
      return state
        .set('isLoading', true)
        .set('error', blankError);
    case (ADD_PLAYLIST_SUCCESS):
      return state
        .set('isLoading', false)
    case (ADD_PLAYLIST_FAILED):
      return state
        .set('isLoading', false)
        .set('error', fromJS(action.error))
    default:
      return state;
  }
}
