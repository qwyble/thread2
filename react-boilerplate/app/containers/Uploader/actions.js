import {
  UPLOAD_SONG,
  UPLOAD_SONG_COMPLETED,
  UPLOAD_SONG_FAILED,
} from './constants';

export function uploadSong(songFields) {
  return {
    type: UPLOAD_SONG,
    songFields,
  };
}

export function uploadSongCompleted() {
  return {
    type: UPLOAD_SONG_COMPLETED,
  };
}

export function uploadSongFailed() {
  return {
    type: UPLOAD_SONG_FAILED,
  };
}
