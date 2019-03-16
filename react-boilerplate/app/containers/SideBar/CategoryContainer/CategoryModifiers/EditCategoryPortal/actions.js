import { SET_EDITED_CATEGORY } from './constants';

export function setEditedCategory(category, whichPortal) {
  return {
    type: SET_EDITED_CATEGORY,
    category,
    whichPortal,
  };
}
