import { fromJS } from 'immutable';

import {
  GET_THREAD,
  GET_THREAD_COMPLETED,
  GET_THREAD_FAILED,
  ADD_COMMENT_TO_THREAD,
} from './constants';

const initialState = fromJS({
  isLoading: true,
  comments: [],
  thread: {},
});

export default function* ThreadViewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THREAD:
      return state.set('isLoading', true);
    case GET_THREAD_COMPLETED:
      return state
        .set('isLoading', false)
        .set('thread', fromJS(action.thread))
        .set('comments', fromJS(action.comments));
    case GET_THREAD_FAILED:
      return state.set('isLoading', false);
    case ADD_COMMENT_TO_THREAD:
      return state.update('comments', comments =>
        comments.push(fromJS(action.comment))
      );
    default:
      return state;
  }
}
