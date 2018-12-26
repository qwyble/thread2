import { GET_SONGS, REMOVE_SONG, SET_CURRENT_PAGE } from './constants';

export function getSongs(sortBy, desc) {
  return {
    type: GET_SONGS,
    sortBy,
    desc,
  };
}

export function removeSong(songId) {
  return {
    type: REMOVE_SONG,
    songId,
  };
}

export function setCurrentPage(page) {
  return {
    type: SET_CURRENT_PAGE,
    page,
  };
}
