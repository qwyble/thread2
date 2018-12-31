import { GET_CATEGORIES, GET_CATEGORIES_COMPLETED } from './constants';

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
