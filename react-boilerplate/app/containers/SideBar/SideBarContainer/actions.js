import {
  SELECT_PLAYLIST,
  SELECT_CATEGORY,
  TOGGLE_VISIBILITY,
} from './constants';

export function setPlaylist(e) {
  return {
    type: SELECT_PLAYLIST,
    plId: e.target.id,
    plName: e.target.value,
  };
}

export function setCategory(catId) {
  return {
    type: SELECT_CATEGORY,
    catId,
  }
  selectedPlName: '',
}

export function toggleVisibility() {
  return {
    type: TOGGLE_VISIBILITY,
  };
}
