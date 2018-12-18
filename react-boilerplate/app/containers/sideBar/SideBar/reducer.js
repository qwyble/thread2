import { fromJS } from 'immutable';
import {
  SET_PLAYLIST,
  TOGGLE_VISIBILITY,
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED
} from './constants';

const blankError = fromJS({});

const initialState = fromJS({
  categories: fromJS({}),
  selectedPlaylist: '',
  isVisible: true,
  isLoading: true,
  error: blankError,
});

function sideBarReducer(state = initialState, action) {
  switch (action.type) {
    case (SET_PLAYLIST):
      return state.set('selectedPlaylist', action.plid);
    case (TOGGLE_VISIBILITY):
      return state.set('isVisible', !state.get('isVisible'));
    case (GET_CATEGORIES):
      return state
        .set('isLoading', true)
        .set('error', blankError);
    case (GET_CATEGORIES_SUCCESS):
      return state
        .set('categories', action.cats)
        .set('isLoading', false);
    case (GET_CATEGORIES_FAILED):
      return state
        .set('isLoading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default sideBarReducer;
