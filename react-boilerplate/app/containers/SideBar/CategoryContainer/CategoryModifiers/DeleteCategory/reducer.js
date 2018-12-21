import { fromJS } from 'immutable';

import {
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
} from './constants';


const blankError = fromJS({});

const initialState = fromJS({
  isLoading: true,
  error: blankError,
});


function DeleteCategory(state = initialState, action) {
  switch (action.type) {
    case DELETE_CATEGORY:
      return state
        .set('isLoading', true)
        .set('error', blankError);
    case DELETE_CATEGORY_SUCCESS:
      return state
        .set('isLoading', false);
    case DELETE_CATEGORY_FAILED:
      return state
        .set('isLoading', false)
        .update('error', fromJS(action.error));
    default:
      return state;
  }
}

export default DeleteCategory;
