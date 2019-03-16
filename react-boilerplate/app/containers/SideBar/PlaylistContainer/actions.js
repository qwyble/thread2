import { SELECT_PLAYLIST, GET_PLAYLIST } from './constants';

export function getPlaylist() {
  return {
    type: GET_PLAYLIST,
  };
}

export function setPlaylist(playlist) {
  return {
    type: SELECT_PLAYLIST,
    playlist,
  };
}
