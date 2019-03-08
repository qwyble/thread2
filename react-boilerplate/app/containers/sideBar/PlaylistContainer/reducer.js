import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import { SELECT_PLAYLIST } from './constants';

import addPlaylist from './PlaylistModifiers/AddPlaylist/reducer';
import deletePlaylist from './PlaylistModifiers/DeletePlaylist/reducer';
import renamePlaylist from './PlaylistModifiers/RenamePlaylist/reducer';

export default combineReducers({
  addPlaylist,
  deletePlaylist,
  renamePlaylist,
  selectedPlaylist,
});

const initialState = fromJS({
  selectedPlaylist: {},
});

function selectedPlaylist(state = initialState, action) {
  switch (action.type) {
    case SELECT_PLAYLIST: {
      if (
        action.playlist.get('plid') !==
        state.getIn(['selectedPlaylist', 'plid'])
      ) {
        return state.set('selectedPlaylist', fromJS(action.playlist));
      }
      return state;
    }
    default:
      return state;
  }
}
