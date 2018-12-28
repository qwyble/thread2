import { fromJS } from 'immutable';
import {
  ADD_SONGS_TO_PL,
  ADD_SONGS_TO_PL_FAILED,
  ADD_SONGS_TO_PL_SUCCESS,
} from './constants';

const blankError = fromJS({});

const initialState = {
  isLoading: false,
  error: blankError,
};

export default function addSongToPlaylist(state = initialState, action) {
  switch (action.type) {
    case ADD_SONGS_TO_PL:
      return state.set('isLoading', true).set('error', blankError);
    case ADD_SONGS_TO_PL_SUCCESS:
      return state.set('isLoading', false);
    case ADD_SONGS_TO_PL_FAILED:
      return state.set('isLoading', false).set('error', action.error);
    default:
      return state;
  }
}
