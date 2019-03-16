import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import { SELECT_PLAYLIST, GET_PLAYLIST } from './constants';

import addPlaylist from './PlaylistModifiers/AddPlaylist/reducer';
import deletePlaylist from './PlaylistModifiers/DeletePlaylist/reducer';
import renamePlaylist from './PlaylistModifiers/RenamePlaylist/reducer';
import editPlaylistPortal from './PlaylistModifiers/EditPlaylistPortal/reducer';

export default combineReducers({
  addPlaylist,
  deletePlaylist,
  renamePlaylist,
  editPlaylistPortal,
  selectedPlaylist,
});

const initialState = fromJS({
  selectedPlaylist: {},
  isLoading: false,
});

function selectedPlaylist(state = initialState, action) {
  switch (action.type) {
    case SELECT_PLAYLIST: {
      return state
        .set('selectedPlaylist', action.playlist)
        .set('isLoading', false);
    }
    case GET_PLAYLIST:
      return state.set('isLoading', true);
    default:
      return state;
  }
}
