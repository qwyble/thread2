import {
  CLONE_PLAYLIST,
  CLONE_PLAYLIST_SUCCESS,
  CLONE_PLAYLIST_FAILED,
} from './constants';

export function clonePlaylist(catId, plName, plToClone) {
  return {
    type: CLONE_PLAYLIST,
    catId,
    plName,
    plToClone,
  };
}

export function clonePlaylistSuccess() {
  return {
    type: CLONE_PLAYLIST_SUCCESS,
  };
}

export function clonePlaylistFailed(error) {
  return {
    type: CLONE_PLAYLIST_FAILED,
    error,
  };
}
