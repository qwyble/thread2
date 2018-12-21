import { fromJS } from 'immutable';

import {
  ADD_PLAYLIST_ATTEMPT,
  ADD_PLAYLIST_FAILED,
  ADD_PLAYLIST_SUCCESS,
} from './constants';


const blankError = fromJS({});

const initialState = fromJS({
  playlists: {},
  addPlaylist: {
    isLoading: true,
    error: blankError,
  },
  deletePlaylist: {
    isLoading: true,
    error: blankError,
  },
  editPlaylist: {
    isLoading: true,
    error: blankError,
  },
});

export default function CategoryContainerReducer(state = initialState, action) {
  switch (action.type) {
    case (ADD_PLAYLIST_ATTEMPT):
      return state
        .setIn(['addPlaylist', 'isLoading'], true)
        .setIn(['addPlaylist', 'error'], blankError);
    case (ADD_PLAYLIST_SUCCESS):
      return state
        .setIn(['addPlaylist', 'isLoading'], false)
    case (ADD_PLAYLIST_FAILED):
      return state
        .setIn(['addPlaylist', 'isLoading'], false)
        .setIn(['addPlaylist', 'error'], fromJS(action.error));
    case (DELETE_PLAYLIST):
      return state
        .setIn(['deletePlaylist', 'isLoading'], true)
        .setIn(['deletePlaylist', 'error'], blankError);
    case (DELETE_PLAYLIST_SUCCESS):
      return state
        .setIn(['deletePlaylist', 'isLoading'], false)
    case (DELETE_PLAYLIST_FAILED):
      return state
        .setIn(['deletePlaylist', 'isLoading'], false)
        .setIn(['deletePlaylist', 'error'], fromJS(action.error))
    default:
      return state;
  }
}
