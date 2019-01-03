import { fromJS } from 'immutable';
import {
  ADD_SONGS_TO_PL,
  ADD_SONGS_TO_PL_FAILED,
  ADD_SONGS_TO_PL_SUCCESS,
} from './constants';

const initialState = fromJS({
  isLoading: false,
});

export default function addSongToPlaylist(state = initialState, action) {
  switch (action.type) {
    case ADD_SONGS_TO_PL:
      return state.set('isLoading', true);
    case ADD_SONGS_TO_PL_SUCCESS:
      return state.set('isLoading', false);
    case ADD_SONGS_TO_PL_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
