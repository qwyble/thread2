import { SELECT_PLAYLIST } from './constants';

export function setPlaylist(playlist) {
  return {
    type: SELECT_PLAYLIST,
    playlist,
  };
}
