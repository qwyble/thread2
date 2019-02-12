import { fromJS } from 'immutable';

import {
  GET_CATEGORIES,
  GET_CATEGORIES_COMPLETED,
  SET_CATEGORY,
} from './constants';

const initialState = fromJS({
  categories: [],
  isLoading: true,
  selectedCategory: undefined,
});

export default function Categories(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return state.set('isLoading', true);
    case GET_CATEGORIES_COMPLETED:
      return state
        .set('categories', fromJS(action.cats))
        .set('isLoading', false);
    case SET_CATEGORY:
      return state.set('selectedCategory', action.catId);
    default:
      return state;
  }
}
