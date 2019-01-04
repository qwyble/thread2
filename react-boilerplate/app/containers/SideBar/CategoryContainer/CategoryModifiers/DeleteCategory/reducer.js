import { fromJS } from 'immutable';

import {
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: false,
});

function DeleteCategory(state = initialState, action) {
  switch (action.type) {
    case DELETE_CATEGORY:
      return state.set('isLoading', true);
    case DELETE_CATEGORY_SUCCESS:
      return state.set('isLoading', false);
    case DELETE_CATEGORY_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}

export default DeleteCategory;
