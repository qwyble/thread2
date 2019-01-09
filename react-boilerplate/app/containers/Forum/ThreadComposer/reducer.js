import { fromJS } from 'immutable';

import {
  POST_THREAD,
  POST_THREAD_COMPLETED,
  POST_THREAD_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  didSucceed: false,
});

export function ThreadComposerReducer(state = initialState, action) {
  switch (action.type) {
    case POST_THREAD:
      return state.set('isLoading', true);
    case POST_THREAD_COMPLETED:
      return state.set('isLoading', false).set('didSucceed', true);
    case POST_THREAD_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
