import {
  DELETE_THREAD,
  DELETE_THREAD_COMPLETED,
  DELETE_THREAD_FAILED,
} from './constants';

export function deleteThread() {
  return {
    type: DELETE_THREAD,
  };
}

export function deleteThreadCompleted() {
  return {
    type: DELETE_THREAD_COMPLETED,
  };
}

export function deleteThreadFailed() {
  return {
    type: DELETE_THREAD_FAILED,
  };
}
