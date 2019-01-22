import {
  HANDLE_PLAYING,
  RESET_LIST,
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
  console.log('handleEnd');
  return {
    type: HANDLE_END,
  };
}

export function handleSkipBack() {
  console.log('handleskipback');
  return {
    type: HANDLE_SKIP_BACK,
  };
}

export function resetAndWait() {
  return {
    type: RESET_LIST,
  };
}
