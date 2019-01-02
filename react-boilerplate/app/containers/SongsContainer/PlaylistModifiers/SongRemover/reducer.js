import { fromJS } from 'immutable';

import {
  REMOVE_SONGS,
  REMOVE_SONGS_COMPLETED,
  REMOVE_SONGS_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  didSucceed: false,
});

export default function removeSongReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_SONGS:
      return state.set('isLoading', true);
    case REMOVE_SONGS_COMPLETED:
      return state.set('didSucceed', true).set('isLoading', false);
    case REMOVE_SONGS_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
