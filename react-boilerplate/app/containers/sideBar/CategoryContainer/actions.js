import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
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
