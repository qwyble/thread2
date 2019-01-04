import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
  ADD_CAT_TO_CATS,
} from './constants';

export function addCategory(category) {
  return {
    type: ADD_CATEGORY,
    category,
  };
}

export function addCategorySuccess() {
  return {
    type: ADD_CATEGORY_SUCCESS,
  };
}

export function addCategoryToCats(category) {
  return {
    type: ADD_CAT_TO_CATS,
    category,
  };
}

export function addCategoryFailed() {
  return {
    type: ADD_CATEGORY_FAILED,
  };
}
