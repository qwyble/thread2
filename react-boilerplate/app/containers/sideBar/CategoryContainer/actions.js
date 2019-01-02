import {
  GET_CATEGORIES,
  GET_CATEGORIES_COMPLETED,
  SET_IS_PUBLIC,
  RENAME_PL_IN_CAT,
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

export function renamePlInCat(plid, plname) {
  return {
    type: RENAME_PL_IN_CAT,
    plid,
    plname,
  };
}

export function setIsPublic(isPublic, plid) {
  return {
    type: SET_IS_PUBLIC,
    isPublic,
    plid,
  };
}
