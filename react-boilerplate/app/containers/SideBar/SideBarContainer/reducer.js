import { fromJS } from 'immutable';
import {
  SELECT_PLAYLIST,
  SELECT_CATEGORY,
  TOGGLE_VISIBILITY,
} from './constants';

const initialState = fromJS({
  selectedPlaylist: '',
  selectedPlName: '',
  selectedCategory: '',
  isVisible: true,
});

function sideBarReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return state.set('selectedCategory', action.catId);
    case SELECT_PLAYLIST:
      return state
        .set('selectedPlaylist', action.plId)
        .set('selectedPlName', action.plName);
    case TOGGLE_VISIBILITY:
      return state.set('isVisible', !state.get('isVisible'));
    default:
      return state;
  }
}

export default sideBarReducer;
