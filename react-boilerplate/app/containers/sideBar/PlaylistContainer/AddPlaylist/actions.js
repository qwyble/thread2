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

export function addPlaylistSuccess(playlist) {
  return {
    type: ADD_PLAYLIST_SUCCESS,
    playlist,
  };
}

export function addPlaylistFailed(error) {
  return {
    type: ADD_PLAYLIST_FAILED,
    error,
  };
}
