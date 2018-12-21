import {
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
  DELETE_CAT_FROM_CATS,
} from './constants';



export function deleteCategory(catId) {
  return {
    type: DELETE_CATEGORY,
    catId,
  };
}

export function deleteCategorySuccess() {
  return {
    type: DELETE_CATEGORY_SUCCESS,
  };
}

export function deleteCategoryFromCats(catId)  {
  return {
    type: DELETE_CAT_FROM_CATS,
    catId,
  }
}

export function deleteCategoryFailed(error) {
  return {
    type: DELETE_CATEGORY_FAILED,
    error,
  };
}
