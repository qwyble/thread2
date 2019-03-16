import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
} from './constants';

export function addCategory(category) {
  return {
    type: ADD_CATEGORY,
    category,
  };
}

export function addCategorySuccess(category) {
  return {
    type: ADD_CATEGORY_SUCCESS,
    category,
  };
}

export function addCategoryFailed() {
  return {
    type: ADD_CATEGORY_FAILED,
  };
}
