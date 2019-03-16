import { SET_EDITED_PLAYLIST } from './constants';

export function setEditedPlaylist(playlist, whichPortal) {
  return {
    type: SET_EDITED_PLAYLIST,
    playlist,
    whichPortal,
  };
}
