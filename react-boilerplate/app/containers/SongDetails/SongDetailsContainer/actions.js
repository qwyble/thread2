import {
  GET_SONG,
  GET_SONG_COMPLETED,
  GET_SONG_FAILED,
  DELETE_SONG,
  DELETE_SONG_COMPLETED,
  DELETE_SONG_FAILED,
} from './constants';

export function getSong() {
  return {
    type: GET_SONG,
  };
}

export function getSongCompleted(song) {
  return {
    type: GET_SONG_COMPLETED,
    song,
  };
}

export function getSongFailed() {
  return {
    type: GET_SONG_FAILED,
  };
}

export function deleteSong() {
  return {
    type: DELETE_SONG,
  };
}

export function deleteSongCompleted() {
  return {
    type: DELETE_SONG_COMPLETED,
  };
}

export function deleteSongFailed() {
  return {
    type: DELETE_SONG_FAILED,
  };
}
