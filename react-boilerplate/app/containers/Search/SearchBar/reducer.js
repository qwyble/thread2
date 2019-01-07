import { fromJS } from 'immutable';
import {
  SEARCH_CHANGE,
  SEARCH_CHANGE_COMPLETED,
  SEARCH_CHANGE_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  users: fromJS([]),
  playlists: fromJS([]),
  songs: fromJS([]),
});

export default function SearchBarReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CHANGE:
      return state.set('isLoading', true);
    case SEARCH_CHANGE_COMPLETED:
      return state
        .set('isLoading', false)
        .set('users', fromJS(action.obj.users))
        .set('playlists', fromJS(action.obj.playlists))
        .set('songs', fromJS(action.obj.songs));
    case SEARCH_CHANGE_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
