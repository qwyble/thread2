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
  SET_IS_LOADING,
  SELECT_ALL,
} from './constants';

export function getSongs() {
  return {
    type: GET_SONGS,
  };
}

export function setIsLoading() {
  return {
    type: SET_IS_LOADING,
  };
}

export function getSongsSuccess(songs, count) {
  return {
    type: GET_SONGS_SUCCESS,
    songs,
    count,
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

export function setCurrentItem(page) {
  return {
    type: SET_CURRENT_PAGE,
    page,
  };
}

export function setCurrentItemReduction(page) {
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

export function selectAll() {
  return {
    type: SELECT_ALL,
  };
}

export function addSongToStream(song) {
  return {
    type: ADD_SONG_TO_STREAM,
    song,
  };
}
