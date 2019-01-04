import {
  GET_SONGS,
  GET_SONGS_SUCCESS,
  GET_SONGS_FAILED,
  REMOVE_SONGS_FROM_PLAYLIST,
  SET_CURRENT_PAGE,
  SET_CURRENT_PAGE_REDUCTION,
  SORT_BY,
  SORT_BY_REDUCTION,
  SET_DESCENDING,
  SET_DESCENDING_REDUCTION,
  SELECT_SONG,
  DESELECT_SONG,
  ADD_SONG_TO_STREAM,
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

export function setCurrentPageReduction(page) {
  return {
    type: SET_CURRENT_PAGE_REDUCTION,
    page,
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

export function selectSong(idSongs) {
  return {
    type: SELECT_SONG,
    idSongs,
  };
}

export function deselectSong(idSongs) {
  return {
    type: DESELECT_SONG,
    idSongs,
  };
}

export function addSongToStream(song) {
  return {
    type: ADD_SONG_TO_STREAM,
    song,
  };
}
