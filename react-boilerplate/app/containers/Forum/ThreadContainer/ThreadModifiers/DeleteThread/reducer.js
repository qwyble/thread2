import { fromJS } from 'immutable';
import {
  DELETE_THREAD,
  DELETE_THREAD_COMPLETED,
  DELETE_THREAD_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  didSucceed: false,
});

export default function DeleteThreadReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_THREAD:
      return state.set('isLoading', true);
    case DELETE_THREAD_COMPLETED:
      return state.set('isLoading', false).set('didSucceed', true);
    case DELETE_THREAD_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
