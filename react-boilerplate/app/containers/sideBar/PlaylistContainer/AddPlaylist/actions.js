import {
  ADD_PLAYLIST,
  ADD_PLAYLIST_SUCCESS,
  ADD_PLAYLIST_FAILED,
  ADD_PL_TO_CAT,
} from './constants';

export function addPlaylist(plName) {
  return {
    type: ADD_PLAYLIST,
    plName,
  };
}

export function addPlaylistSuccess(playlist) {
  return {
    type: ADD_PLAYLIST_SUCCESS,
    playlist,
  };
}

export function addPlaylistToCategory(playlist, catId) {
  return {
    type: ADD_PL_TO_CAT,
    playlist,
    catId,
  };
}

export function addPlaylistFailed(error) {
  return {
    type: ADD_PLAYLIST_FAILED,
    error,
  };
}
