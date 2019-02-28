import {
  SUBMIT_COMMENT,
  SUBMIT_COMMENT_COMPLETED,
  SUBMIT_COMMENT_FAILED,
  INITIALIZE_STATE,
} from './constants';

export function submitComment(comment) {
  return {
    type: SUBMIT_COMMENT,
    comment,
  };
}

export function submitCommentCompleted() {
  return {
    type: SUBMIT_COMMENT_COMPLETED,
  };
}

export function submitCommentFailed() {
  return {
    type: SUBMIT_COMMENT_FAILED,
  };
}

export function initState() {
  return {
    type: INITIALIZE_STATE,
  };
}
