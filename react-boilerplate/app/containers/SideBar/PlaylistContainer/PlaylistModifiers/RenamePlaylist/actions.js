import {
  RENAME_PLAYLIST,
  RENAME_PLAYLIST_SUCCESS,
  RENAME_PLAYLIST_FAILED,
} from './constants';

export function renamePlaylist(playlist) {
  return {
    type: RENAME_PLAYLIST,
    playlist,
  };
}

export function renamePlaylistSuccess() {
  return {
    type: RENAME_PLAYLIST_SUCCESS,
  };
}

export function renamePlaylistFailed() {
  return {
    type: RENAME_PLAYLIST_FAILED,
  };
}
