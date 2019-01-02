import {
  HANDLE_PLAYING,
  HANDLE_PAUSING,
  HANDLE_END,
  HANDLE_SKIP_BACK,
} from './constants';

export function handlePlaying(song) {
  return {
    type: HANDLE_PLAYING,
    song,
  };
}

export function handlePausing() {
  return {
    type: HANDLE_PAUSING,
  };
}

export function handleEnd() {
  return {
    type: HANDLE_END,
  };
}

export function handleSkipBack() {
  return {
    type: HANDLE_SKIP_BACK,
  };
}
