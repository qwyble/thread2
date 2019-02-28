import { fromJS } from 'immutable';

import {
  GET_THREAD,
  GET_THREAD_COMPLETED,
  GET_THREAD_FAILED,
  GET_COMMENTS,
  GET_COMMENTS_COMPLETED,
  GET_COMMENTS_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: true,
  comments: [],
  thread: {},
  commentsLoading: false,
});

export default function ThreadContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THREAD:
      return state.set('isLoading', true);
    case GET_THREAD_COMPLETED:
      return state.set('isLoading', false).set('thread', fromJS(action.thread));
    case GET_THREAD_FAILED:
      return state.set('isLoading', false);
    case GET_COMMENTS:
      return state.set('commentsLoading', true);
    case GET_COMMENTS_COMPLETED:
      return state
        .set('commentsLoading', false)
        .set('comments', fromJS(action.comments));
    case GET_COMMENTS_FAILED:
      return state.set('commentsLoading', false);
    default:
      return state;
  }
}
