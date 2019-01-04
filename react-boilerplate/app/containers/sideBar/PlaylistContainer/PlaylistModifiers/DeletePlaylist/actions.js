import {
  DELETE_PLAYLIST,
  DELETE_PLAYLIST_SUCCESS,
  DELETE_PLAYLIST_FAILED,
  REMOVE_PL_FROM_CAT,
} from './constants';

export function deletePlaylist(plId) {
  return {
    type: DELETE_PLAYLIST,
    plId,
  };
}

export function deletePlaylistSuccess() {
  return {
    type: DELETE_PLAYLIST_SUCCESS,
  };
}

export function removePlaylistFromCategory(plId, catId) {
  return {
    type: REMOVE_PL_FROM_CAT,
    plId,
    catId,
  };
}

export function deletePlaylistFailed() {
  return {
    type: DELETE_PLAYLIST_FAILED,
  };
}
