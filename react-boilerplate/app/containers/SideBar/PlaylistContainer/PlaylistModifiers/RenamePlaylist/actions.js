import {
  RENAME_PLAYLIST,
  RENAME_PLAYLIST_SUCCESS,
  RENAME_PLAYLIST_FAILED,
  RENAME_PL_IN_CAT,
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

export function renamePlaylistFailed(error) {
  return {
    type: RENAME_PLAYLIST_FAILED,
    error,
  };
}

