import {
  GET_SONGS,
  GET_SONGS_SUCCESS,
  GET_SONGS_FAILED,
  REMOVE_SONGS_FROM_PLAYLIST,
  ADD_SONGS_TO_PLAYLIST,
  SET_CURRENT_PAGE,
} from './constants';

export function getSongs(sortBy, desc) {
  return {
    type: GET_SONGS,
    sortBy,
    desc,
  };
}

export function getSongsSUccess(songs) {
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
