import {
  EDIT_CATEGORY,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILED,
} from './constants';

export function editCategory(category) {
  return {
    type: EDIT_CATEGORY,
    category,
  };
}

export function editCategorySuccess(category) {
  return {
    type: EDIT_CATEGORY_SUCCESS,
    category,
  };
}

export function editCategoryFailed() {
  return {
    type: EDIT_CATEGORY_FAILED,
  };
}
