import {
  DELETE_PLAYLIST,
  DELETE_PLAYLIST_SUCCESS,
  DELETE_PLAYLIST_FAILED,
  REMOVE_PL_FROM_CAT,
} from './constants';

export function deletePlaylist() {
  return {
    type: DELETE_PLAYLIST,
  };
}

export function deletePlaylistSuccess(catid, plid) {
  return {
    type: DELETE_PLAYLIST_SUCCESS,
    plid,
    catid,
  };
}

export function deletePlaylistFailed() {
  return {
    type: DELETE_PLAYLIST_FAILED,
  };
}
