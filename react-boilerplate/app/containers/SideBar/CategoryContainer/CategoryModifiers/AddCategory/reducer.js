import { fromJS } from 'immutable';
import {
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
  ADD_CATEGORY,
} from './constants';

const blankError = fromJS({});

const initialState = fromJS({
  isLoading: false,
  error: blankError,
});

export default function AddCategory(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return state.set('isLoading', true).set('error', blankError);
    case ADD_CATEGORY_SUCCESS:
      return state.set('isLoading', false);
    case ADD_CATEGORY_FAILED:
      return state.set('isLoading', false).set('error', fromJS(action.error));
    default:
      return state;
  }
}
