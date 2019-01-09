import {
  GET_SUBSCRIBED,
  GET_SUBSCRIBED_COMPLETED,
  GET_SUBSCRIBED_FAILED,
  SUBSCRIBE,
  SUBSCRIBE_COMPLETED,
  SUBSCRIBE_FAILED,
} from './constants';

export function getSubscribed() {
  return {
    type: GET_SUBSCRIBED,
  };
}

export function getSubscribedCompleted(subbed) {
  return {
    type: GET_SUBSCRIBED_COMPLETED,
    subbed,
  };
}

export function getSubscribedFailed() {
  return {
    type: GET_SUBSCRIBED_FAILED,
  };
}

export function subscribe() {
  return {
    type: SUBSCRIBE,
  };
}

export function subscribeCompleted() {
  return {
    type: SUBSCRIBE_COMPLETED,
  };
}

export function subscribeFailed() {
  return {
    type: SUBSCRIBE_FAILED,
  };
}
