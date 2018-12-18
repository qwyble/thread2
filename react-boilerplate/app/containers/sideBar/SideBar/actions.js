import {
  SET_PLAYLIST,
  TOGGLE_VISIBILITY,
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  ADD_CATEGORY_ATTEMPT,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
} from './constants';



export function setPlaylist(plid) {
  return {
    type: SET_PLAYLIST,
    plid,
  };
}

export function toggleVisibility() {
  return {
    type: TOGGLE_VISIBILITY,
  };
}

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

export function addCategory() {
  return {
    type: ADD_CATEGORY_ATTEMPT,
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
