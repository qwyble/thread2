import { fromJS } from 'immutable';

import {
  ADD_PLAYLIST_ATTEMPT,
  ADD_PLAYLIST_FAILED,
  ADD_PLAYLIST_SUCCESS,
} from './constants';


const blankError = fromJS({});

const initialState = fromJS({
  categories: fromJS({}),
  selectedPlaylist: '',
  selectedCategory: '',
  isVisible: true,
  isLoading: true,
  isAddCatLoading: false,
  isAddPlaylistLoading: false,
  error: blankError,
  addCatError: blankError,
  addPlaylistError: blankError,
});

export default function CategoryContainerReducer(state = initialState, action) {
  switch (action.type) {
    case (ADD_PLAYLIST_ATTEMPT):
      return state
        .set('isAddPlaylistLoading', true)
        .set('addPlaylistError', blankError);
    case (ADD_PLAYLIST_SUCCESS):
      return state
        .set('isAddPlaylistLoading', false)
        .update('playlists', playlists => playlists.push(action.playlist));
    case (ADD_PLAYLIST_FAILED):
      return state
        .set('isAddPlaylistLoading', false)
        .set('addPlaylistError', action.error);
    default:
      return state;
  }
}
