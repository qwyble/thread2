import {
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
} from './constants';

export function deleteCategory() {
  return {
    type: DELETE_CATEGORY,
  };
}

export function deleteCategorySuccess(catid) {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    catid,
  };
}

export function deleteCategoryFailed() {
  return {
    type: DELETE_CATEGORY_FAILED,
  };
}
