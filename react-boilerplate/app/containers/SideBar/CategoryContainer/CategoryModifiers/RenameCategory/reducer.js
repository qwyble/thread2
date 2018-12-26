import { fromJS } from 'immutable';

import {
  EDIT_CATEGORY,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILED,
} from './constants';

const blankError = fromJS({});

const initialState = fromJS({
  isLoading: false,
  error: blankError,
});

function RenameCategory(state = initialState, action) {
  switch (action.type) {
    case EDIT_CATEGORY:
      return state.set('isLoading', true).set('error', blankError);
    case EDIT_CATEGORY_SUCCESS: {
      return state.set('isLoading', false);
    }
    case EDIT_CATEGORY_FAILED:
      return state.set('isLoading', false).set('error', fromJS(action.error));
    default:
      return state;
  }
}

export default RenameCategory;
