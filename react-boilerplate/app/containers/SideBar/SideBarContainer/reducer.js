import { fromJS } from 'immutable';

import { SELECT_PLAYLIST, SELECT_CATEGORY } from './constants';

const initialState = fromJS({
  selectedPlaylist: {},
  selectedCategory: {},
});

function sideBarReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return state.set('selectedCategory', fromJS(action.category));
    case SELECT_PLAYLIST:
      return state.set('selectedPlaylist', fromJS(action.playlist));
    default:
      return state;
  }
}

export default sideBarReducer;
