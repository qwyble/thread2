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
        .update('playlists', playlists => playlists.push(action.playlist));
    case (ADD_PLAYLIST_FAILED):
      return state
        .setIn(['addPlaylist', 'isLoading'], false)
        .setIn(['addPlaylist', 'error'], action.error);
    default:
      return state;
  }
}
