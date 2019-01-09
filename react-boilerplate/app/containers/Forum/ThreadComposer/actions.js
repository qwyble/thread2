import {
  POST_THREAD,
  POST_THREAD_COMPLETED,
  POST_THREAD_FAILED,
} from './constants';

export function postThread(thread) {
  return {
    type: POST_THREAD,
    thread,
  };
}

export function postThreadCompleted() {
  return {
    type: POST_THREAD_COMPLETED,
  };
}

export function postThreadFailed() {
  return {
    type: POST_THREAD_FAILED,
  };
}
