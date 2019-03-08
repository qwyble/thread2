import { fromJS } from 'immutable';
import { combineReducers } from 'redux';

import { ADD_PL_TO_CAT } from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/AddPlaylist/constants';
import { REMOVE_PL_FROM_CAT } from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/DeletePlaylist/constants';

import AddCategory from './CategoryModifiers/AddCategory/reducer';
import DeleteCategory from './CategoryModifiers/DeleteCategory/reducer';
import RenameCategory from './CategoryModifiers/RenameCategory/reducer';

import {
  RENAME_PL_IN_CAT,
  SET_IS_PUBLIC,
  GET_CATEGORIES,
  GET_CATEGORIES_COMPLETED,
  SELECT_CATEGORY,
} from './constants';

import { ADD_CAT_TO_CATS } from './CategoryModifiers/AddCategory/constants';
import { DELETE_CAT_FROM_CATS } from './CategoryModifiers/DeleteCategory/constants';
import { EDIT_CAT_IN_CATS } from './CategoryModifiers/RenameCategory/constants';

const initialState = fromJS({
  categories: [],
  isLoading: true,
  selectedCategory: {},
});

export default function Categories(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return state.set('isLoading', true);
    case GET_CATEGORIES_COMPLETED:
      return state
        .set('categories', fromJS(action.cats))
        .set('isLoading', false);
    case SELECT_CATEGORY: {
      const cat =
        state.getIn(['selectedCategory', 'catid']) ===
        action.category.get('catid')
          ? fromJS({})
          : action.category;
      return state.set('selectedCategory', cat);
    }
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
    case RENAME_PL_IN_CAT: {
      const catIndex = state
        .get('categories')
        .findIndex(cat => cat.pls.findIndex(pl => pl.plid === action.plid));
      const plIndex = state
        .getIn(['categories', catIndex, 'pls'])
        .findIndex(pl => pl.plid === action.plid);
      return state.updateIn(
        ['categories', catIndex, 'pls', plIndex, 'plname'],
        action.plname
      );
    }
    case SET_IS_PUBLIC: {
      const catIndex = state
        .get('categories')
        .findIndex(cat => cat.pls.findIndex(pl => pl.plid === action.plid));
      const plIndex = state
        .getIn(['categories', catIndex, 'pls'])
        .findIndex(pl => pl.plid === action.plid);
      return state.updateIn(
        ['categories', catIndex, 'pls', plIndex, 'isPublic'],
        action.isPublic
      );
    }
    default:
      return state;
  }
}
