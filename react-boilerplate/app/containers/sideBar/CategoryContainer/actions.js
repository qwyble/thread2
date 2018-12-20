import {
  CATEGORY_ATTEMPT,
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  ADD_CATEGORY_ATTEMPT,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
  DELETE_CATEGORY_ATTEMPT,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
  EDIT_CATEGORY_ATTEMPT,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILED,
} from './constants';


export function getCategories() {
  return {
    type: GET_CATEGORIES,
  };
}

export function getCategoriesSuccess(cats) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    cats,
  };
}

export function getCategoriesFailed(error) {
  return {
    type: GET_CATEGORIES_FAILED,
    error,
  };
}

export function categoryAttempt() {
  return {
    type: CATEGORY_ATTEMPT,
  };
}

export function addCategory(category) {
  return {
    type: ADD_CATEGORY_ATTEMPT,
    category,
  };
}

export function addCategorySuccess(category) {
  return {
    type: ADD_CATEGORY_SUCCESS,
    category,
  };
}

export function addCategoryFailed(error) {
  return {
    type: ADD_CATEGORY_FAILED,
    error,
  };
}

export function deleteCategory(catId) {
  return {
    type: DELETE_CATEGORY_ATTEMPT,
    catId,
  };
}

export function deleteCategorySuccess(catId) {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    catId,
  }
}

export function deleteCategoryFailed(error) {
  return {
    type: DELETE_CATEGORY_FAILED,
    error,
  };
}

export function editCategory(category) {
  return {
    type: EDIT_CATEGORY_ATTEMPT,
    category,
  }
}

export function editCategorySuccess(category) {
  return {
    type: EDIT_CATEGORY_SUCCESS,
    category,
  }
}

export function editCategoryFailed(error) {
  return {
    type: EDIT_CATEGORY_FAILED,
    error,
  };
}
