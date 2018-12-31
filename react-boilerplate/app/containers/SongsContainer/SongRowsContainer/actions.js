import { RATE_SONG, RATE_SONG_COMPLETED, CHANGE_RATING } from './constants';

export function rateSong(idSongs, rating) {
  return {
    type: RATE_SONG,
    idSongs,
    rating,
  };
}

export function rateSongCompleted() {
  return {
    type: RATE_SONG_COMPLETED,
  };
}

export function changeRating(idSongs, rating) {
  return {
    type: CHANGE_RATING,
    idSongs,
    rating,
  };
}
