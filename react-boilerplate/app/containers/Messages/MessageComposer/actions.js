import {
  GET_USERS,
  GET_USERS_COMPLETED,
  SEND_MESSAGE,
  SEND_MESSAGE_COMPLETED,
  SEND_MESSAGE_FAILED,
} from './constants';

export function getUsers() {
  return {
    type: GET_USERS,
  };
}

export function getUsersCompleted(users) {
  return {
    type: GET_USERS_COMPLETED,
    users,
  };
}

export function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    message,
  };
}

export function sendMessageCompleted(message) {
  return {
    type: SEND_MESSAGE_COMPLETED,
    message,
  };
}

export function sendMessageFailed() {
  return {
    type: SEND_MESSAGE_FAILED,
  };
}
