import {
  GET_SONGS,
  GET_SONGS_SUCCESS,
  GET_SONGS_FAILED,
  REMOVE_SONGS_FROM_PLAYLIST,
  ADD_SONGS_TO_PLAYLIST,
  SET_CURRENT_PAGE,
  SORT_BY,
  SORT_BY_REDUCTION,
  SET_DESCENDING,
  SET_DESCENDING_REDUCTION,
} from './constants';

export function getSongs() {
  return {
    type: GET_SONGS,
  };
}

export function getSongsSuccess(songs) {
  return {
    type: GET_SONGS_SUCCESS,
    songs,
  };
}

export function getSongsFailed(error) {
  return {
    type: GET_SONGS_FAILED,
    error,
  };
}

export function removeSongsFromPlaylist(songIds) {
  return {
    type: REMOVE_SONGS_FROM_PLAYLIST,
    songIds,
  };
}

export function setCurrentPage(page) {
  return {
    type: SET_CURRENT_PAGE,
    page,
  };
}

export function addSongsToPlaylist(songs) {
  return {
    type: ADD_SONGS_TO_PLAYLIST,
    songs,
  };
}

export function sortBy(sortParam) {
  return {
    type: SORT_BY,
    sortParam,
  };
}

export function sortByReduction(sortParam) {
  return {
    type: SORT_BY_REDUCTION,
    sortParam,
  };
}

export function setDescending() {
  return {
    type: SET_DESCENDING,
  };
}

export function setDescendingReduction() {
  return {
    type: SET_DESCENDING_REDUCTION,
  };
}

export function selectSong() {
  return {
    type: SELECT_SONG,
    idSongs,
  };
}

export function deselectSong() {
  return {
    type: DESELECT_SONG,
    idSongs,
  };
}
