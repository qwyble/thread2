import { fromJS } from 'immutable';
import { combineReducers } from 'redux';

import { ADD_PL_TO_CAT } from 'containers/sideBar/PlaylistContainer/AddPlaylist/constants';
import { REMOVE_PL_FROM_CAT } from 'containers/sideBar/PlaylistContainer/DeletePlaylist/constants';
import AddCategory from './CategoryModifiers/AddCategory/reducer';
import DeleteCategory from './CategoryModifiers/DeleteCategory/reducer';
import RenameCategory from './CategoryModifiers/RenameCategory/reducer';


import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
} from './constants';

import { ADD_CAT_TO_CATS } from './CategoryModifiers/AddCategory/constants';
import { DELETE_CAT_FROM_CATS } from './CategoryModifiers/AddCategory/constants';
import { EDIT_CAT_IN_CATS } from './CategoryModifiers/AddCategory/constants';

const blankError = fromJS({});

const initialState = fromJS({
  categories: fromJS({}),
  isLoading: true,
  error: blankError,
});

export default combineReducers({
  Categories,
  AddCategory,
  DeleteCategory,
  RenameCategory,
});

function Categories(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return state.set('isLoading', true).set('error', blankError);
    case GET_CATEGORIES_SUCCESS:
      return state
        .set('categories', fromJS(action.cats))
        .set('isLoading', false);
    case GET_CATEGORIES_FAILED:
      return state.set('isLoading', false).set('error', fromJS(action.error));
    case ADD_CAT_TO_CATS:
      return state.update('categories', categories =>
        categories.push(fromJS(action.category))
      );
    case DELETE_CAT_FROM_CATS:
      return state.update('categories', categories =>
        categories.filter(cat => cat.catid !== action.catId)
      );
    case EDIT_CAT_IN_CATS: {
      const index = state
        .get('categories')
        .findIndex(i => i.catid === action.category.catid);
      return state.updateIn(['categories', index], fromJS(action.category));
    }
    case ADD_PL_TO_CAT:
      return state.update('categories', cats =>
        cats
          .find(cat => cat.catid === action.catId)
          .update('pls', pls => pls.push(fromJS(action.playlist)))
      );
    case REMOVE_PL_FROM_CAT:
      return state.update('categories', cats =>
        cats
          .find(cat => cat.catid === action.catid)
          .update('pls', pls => pls.filter(pl => pl.plid !== action.plId))
      );
    default:
      return state;
  }
}
