import {
  GET_CATEGORIES,
  GET_CATEGORIES_COMPLETED,
  SET_CATEGORY,
} from './constants';

export function getCategories() {
  return {
    type: GET_CATEGORIES,
  };
}

export function getCategoriesCompleted(cats) {
  return {
    type: GET_CATEGORIES_COMPLETED,
    cats,
  };
}

export function setCategory(e) {
  return {
    type: SET_CATEGORY,
    catId: parseInt(e.target.value, 10),
  };
}
