import { SELECT_PLAYLIST, SELECT_CATEGORY } from './constants';

export function setPlaylist(playlist) {
  return {
    type: SELECT_PLAYLIST,
    playlist,
  };
}

export function setCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category,
  };
}
