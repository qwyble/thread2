import{
  EDIT_CATEGORY,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILED,
  EDIT_CAT_IN_CATS,
} from './constants';

export function editCategory(category) {
  return {
    type: EDIT_CATEGORY,
    category,
  };
}

export function editCategorySuccess() {
  return {
    type: EDIT_CATEGORY_SUCCESS,
  };
}

export function editCategoryInCats(category) {
  return {
    type: EDIT_CAT_IN_CATS,
    category,
  }
}

export function editCategoryFailed(error) {
  return {
    type: EDIT_CATEGORY_FAILED,
    error,
  };
}
