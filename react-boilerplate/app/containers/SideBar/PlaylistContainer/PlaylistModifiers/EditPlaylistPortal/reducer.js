import { fromJS } from 'immutable';

import { SET_EDITED_PLAYLIST } from './constants';
import { DELETE_PLAYLIST_SUCCESS } from '../DeletePlaylist/constants';
import { RENAME_PLAYLIST_SUCCESS } from '../RenamePlaylist/constants';
const initialState = fromJS({
  playlist: {},
  whichPortal: -1,
});

export default function editPlaylistPortalReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case SET_EDITED_PLAYLIST:
      return state
        .set('playlist', action.playlist)
        .set('whichPortal', action.whichPortal);
    case DELETE_PLAYLIST_SUCCESS:
      return initialState;
    case RENAME_PLAYLIST_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
