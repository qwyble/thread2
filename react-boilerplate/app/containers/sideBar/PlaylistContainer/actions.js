import {
  ADD_PLAYLIST_ATTEMPT,
  ADD_PLAYLIST_SUCCESS,
  ADD_PLAYLIST_FAILED,
} from './constants';

export function addPlaylist(playlist) {
  return {
    type: ADD_PLAYLIST_ATTEMPT,
    playlist,
  };
}

export function addPlaylistSuccess(playlist, catId) {
  return {
    type: ADD_PLAYLIST_SUCCESS,
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
