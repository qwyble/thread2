import { fromJS } from 'immutable';
import {
  SUBMIT_COMMENT,
  SUBMIT_COMMENT_COMPLETED,
  SUBMIT_COMMENT_FAILED,
  INITIALIZE_STATE,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  didSucceed: false,
});

export default function AddCommentReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_COMMENT:
      return state.set('isLoading', true);
    case SUBMIT_COMMENT_COMPLETED:
      return state.set('isLoading', false).set('didSucceed', true);
    case SUBMIT_COMMENT_FAILED:
      return state.set('isLoading', false);
    case INITIALIZE_STATE:
      return initialState;
    default:
      return state;
  }
}
