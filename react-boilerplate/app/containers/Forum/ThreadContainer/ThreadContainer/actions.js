import {
  GET_THREAD,
  GET_THREAD_COMPLETED,
  GET_THREAD_FAILED,
  GET_COMMENTS,
  GET_COMMENTS_COMPLETED,
  GET_COMMENTS_FAILED,
} from './constants';

export function getThread(threadId) {
  return {
    type: GET_THREAD,
    threadId,
  };
}

export function getThreadCompleted(thread) {
  return {
    type: GET_THREAD_COMPLETED,
    thread,
  };
}

export function getThreadFailed() {
  return {
    type: GET_THREAD_FAILED,
  };
}

export function getComments(threadId) {
  return {
    type: GET_COMMENTS,
    threadId,
  };
}

export function getCommentsCompleted(comments) {
  return {
    type: GET_COMMENTS_COMPLETED,
    comments,
  };
}

export function getCommentsFailed() {
  return {
    type: GET_COMMENTS_FAILED,
  };
}
