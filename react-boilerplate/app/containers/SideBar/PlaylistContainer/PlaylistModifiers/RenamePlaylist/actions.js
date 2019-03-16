import {
  RENAME_PLAYLIST,
  RENAME_PLAYLIST_SUCCESS,
  RENAME_PLAYLIST_FAILED,
} from './constants';

export function renamePlaylist(newName) {
  return {
    type: RENAME_PLAYLIST,
    newName,
  };
}

export function renamePlaylistSuccess(plid, newName) {
  return {
    type: RENAME_PLAYLIST_SUCCESS,
    plid,
    newName,
  };
}

export function renamePlaylistFailed() {
  return {
    type: RENAME_PLAYLIST_FAILED,
  };
}
