import { GET_FEED, GET_FEED_COMPLETED, GET_FEED_FAILED } from './constants';

export function getFeed() {
  return {
    type: GET_FEED,
  };
}

export function getFeedCompleted(feedEvents) {
  return {
    type: GET_FEED_COMPLETED,
    feedEvents,
  };
}

export function getFeedFailed() {
  return {
    type: GET_FEED_FAILED,
  };
}
