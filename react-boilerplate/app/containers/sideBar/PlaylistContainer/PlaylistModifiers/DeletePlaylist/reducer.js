import { fromJS } from 'immutable';

import {
  DELETE_PLAYLIST,
  DELETE_PLAYLIST_FAILED,
  DELETE_PLAYLIST_SUCCESS,
} from './constants';


const blankError = fromJS({});

const initialState = fromJS({
  isLoading: true,
  error: blankError,
});

export default function deletePlaylistReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_PLAYLIST:
      return state.set("isLoading", true).set("error", blankError);
    case DELETE_PLAYLIST_SUCCESS:
      return state.set("isLoading", false);
    case DELETE_PLAYLIST_FAILED:
      return state.set("isLoading", false).set("error", fromJS(action.error));
    default:
      return state;
  }
}
