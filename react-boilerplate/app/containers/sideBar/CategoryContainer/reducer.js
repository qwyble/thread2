import { fromJS } from 'immutable';

import {
  SET_IS_PUBLIC,
  GET_CATEGORIES,
  GET_CATEGORIES_COMPLETED,
  SELECT_CATEGORY,
} from './constants';

import { ADD_CATEGORY_SUCCESS } from './CategoryModifiers/AddCategory/constants';
import { DELETE_CATEGORY_SUCCESS } from './CategoryModifiers/DeleteCategory/constants';
import { EDIT_CATEGORY_SUCCESS } from './CategoryModifiers/RenameCategory/constants';
import { ADD_PLAYLIST_SUCCESS } from '../PlaylistContainer/PlaylistModifiers/AddPlaylist/constants';
import { DELETE_PLAYLIST_SUCCESS } from '../PlaylistContainer/PlaylistModifiers/DeletePlaylist/constants';
import { RENAME_PLAYLIST_SUCCESS } from '../PlaylistContainer/PlaylistModifiers/RenamePlaylist/constants';

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
    case ADD_CATEGORY_SUCCESS:
      return state.update('categories', categories =>
        categories.push(fromJS(action.category))
      );
    case DELETE_CATEGORY_SUCCESS:
      return state.update('categories', categories =>
        categories.filter(cat => cat.get('catid') !== action.catid)
      );
    case EDIT_CATEGORY_SUCCESS: {
      const index = state
        .get('categories')
        .findIndex(i => i.get('catid') === action.category.catid);
      return state.setIn(
        ['categories', index, 'catname'],
        fromJS(action.category.name)
      );
    }
    case ADD_PLAYLIST_SUCCESS: {
      const catIndex = state
        .get('categories')
        .findIndex(cat => cat.get('catid') === action.catid);
      return state.updateIn(['categories', catIndex], cat =>
        cat.update('pls', pls => pls.push(fromJS(action.playlist)))
      );
    }
    case DELETE_PLAYLIST_SUCCESS: {
      const catIndex = state
        .get('categories')
        .findIndex(cat => cat.get('catid') === action.catid);
      return state.updateIn(['categories', catIndex], cat =>
        cat.update('pls', pls =>
          pls.filter(pl => pl.get('plid') !== action.plid)
        )
      );
    }
    case RENAME_PLAYLIST_SUCCESS: {
      const catIndex = state
        .get('categories')
        .findIndex(
          cat =>
            cat.get('pls').findIndex(pl => pl.get('plid') === action.plid) !==
            -1
        );
      const plIndex = state
        .getIn(['categories', catIndex, 'pls'])
        .findIndex(pl => pl.get('plid') === action.plid);
      return state.setIn(
        ['categories', catIndex, 'pls', plIndex, 'plname'],
        action.newName
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
