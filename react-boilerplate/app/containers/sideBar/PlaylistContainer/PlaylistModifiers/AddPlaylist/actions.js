import {
  ADD_PLAYLIST,
  ADD_PLAYLIST_SUCCESS,
  ADD_PLAYLIST_FAILED,
} from './constants';

export function addPlaylist(plName) {
  return {
    type: ADD_PLAYLIST,
    plName,
  };
}

export function addPlaylistSuccess(playlist, catid) {
  return {
    type: ADD_PLAYLIST_SUCCESS,
    playlist,
    catid,
  };
}

export function addPlaylistFailed() {
  return {
    type: ADD_PLAYLIST_FAILED,
  };
}
