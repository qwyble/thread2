import {
  HANDLE_PLAYING,
  RESET_LIST,
  HANDLE_PAUSING,
  HANDLE_END,
  HANDLE_SKIP_BACK,
  START_FROM_END,
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

export function startFromEnd() {
  return {
    type: START_FROM_END,
  };
}

export function resetList(direction) {
  return {
    type: RESET_LIST,
    direction,
  };
}
