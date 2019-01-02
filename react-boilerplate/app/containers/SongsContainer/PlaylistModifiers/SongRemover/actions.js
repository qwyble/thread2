import {
  REMOVE_SONGS,
  REMOVE_SONGS_COMPLETED,
  REMOVE_SONGS_FAILED,
} from './constants';

export function removeSongs() {
  return {
    type: REMOVE_SONGS,
  };
}

export function removeSongsCompleted() {
  return {
    type: REMOVE_SONGS_COMPLETED,
  };
}

export function removeSongsFailed() {
  return {
    type: REMOVE_SONGS_FAILED,
  };
}
