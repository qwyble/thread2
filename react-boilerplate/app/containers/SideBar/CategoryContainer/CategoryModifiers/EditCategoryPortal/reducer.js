import { fromJS } from 'immutable';

import { SET_EDITED_CATEGORY } from './constants';
const initialState = fromJS({
  category: {},
  whichPortal: -1,
});

export default function editCategoryPortalReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case SET_EDITED_CATEGORY:
      return state
        .set('category', action.category)
        .set('whichPortal', action.whichPortal);
    default:
      return state;
  }
}
