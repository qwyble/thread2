import { fromJS } from 'immutable';

import {
  EDIT_CATEGORY,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: false,
});

function RenameCategory(state = initialState, action) {
  switch (action.type) {
    case EDIT_CATEGORY:
      return state.set('isLoading', true);
    case EDIT_CATEGORY_SUCCESS: {
      return state.set('isLoading', false);
    }
    case EDIT_CATEGORY_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}

export default RenameCategory;
