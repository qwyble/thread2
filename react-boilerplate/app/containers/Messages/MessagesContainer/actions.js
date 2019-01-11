import {
  GET_MESSAGES,
  GET_MESSAGES_COMPLETED,
  GET_MESSAGES_FAILED,
  DELETE_MESSAGES,
  DELETE_MESSAGES_COMPLETED,
  DELETE_MESSAGES_FAILED,
  SELECT_MESSAGE,
} from './constants';

export function getMessages(kind) {
  return {
    type: GET_MESSAGES,
    kind,
  };
}

export function getMessagesCompleted(messages) {
  return {
    type: GET_MESSAGES_COMPLETED,
    messages,
  };
}

export function getMessagesFailed() {
  return {
    type: GET_MESSAGES_FAILED,
  };
}

export function deleteMessages() {
  return {
    type: DELETE_MESSAGES,
  };
}

export function deleteMessagesCompleted(messageIds) {
  return {
    type: DELETE_MESSAGES_COMPLETED,
    messageIds,
  };
}

export function deleteMessagesFailed() {
  return {
    type: DELETE_MESSAGES_FAILED,
  };
}

export function selectMessage(e) {
  return {
    type: SELECT_MESSAGE,
    id: e.target.id,
  };
}
