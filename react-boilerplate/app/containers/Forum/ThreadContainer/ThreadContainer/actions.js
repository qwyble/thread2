import {
  GET_THREAD,
  GET_THREAD_COMPLETED,
  GET_THREAD_FAILED,
  ADD_COMMENT_TO_THREAD,
} from './constants';

export function getThread() {
  return {
    type: GET_THREAD,
  };
}

export function getThreadCompleted(thread, comments) {
  return {
    type: GET_THREAD_COMPLETED,
    thread,
    comments,
  };
}

export function getThreadFailed() {
  return {
    type: GET_THREAD_FAILED,
  };
}

export function addCommentToThread(comment) {
  return {
    type: ADD_COMMENT_TO_THREAD,
    comment,
  };
}
