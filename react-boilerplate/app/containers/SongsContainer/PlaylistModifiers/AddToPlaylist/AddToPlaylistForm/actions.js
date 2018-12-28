import {
  ADD_SONGS_TO_PL,
  ADD_SONGS_TO_PL_SUCCESS,
  ADD_SONGS_TO_PL_FAILED,
} from './constants';

export function addSongsToPlaylist(plid) {
  return {
    type: ADD_SONGS_TO_PL,
    plid,
  };
}

export function addSongsToPlSuccess() {
  return {
    type: ADD_SONGS_TO_PL_SUCCESS,
  };
}

export function addSongsToPlFailed(error) {
  return {
    type: ADD_SONGS_TO_PL_FAILED,
    error,
  };
}
