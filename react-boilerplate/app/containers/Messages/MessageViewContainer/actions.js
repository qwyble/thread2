import {
  GET_MESSAGE,
  GET_MESSAGE_COMPLETED,
  GET_MESSAGE_FAILED,
} from './constants';

export function getMessage(messageId) {
  return {
    type: GET_MESSAGE,
    messageId,
  };
}

export function getMessageCompleted(message) {
  return {
    type: GET_MESSAGE_COMPLETED,
    message,
  };
}

export function getMessageFailed() {
  return {
    type: GET_MESSAGE_FAILED,
  };
}
