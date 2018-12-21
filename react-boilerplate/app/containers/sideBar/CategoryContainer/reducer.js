import { fromJS } from "immutable";

import { ADD_PL_TO_CAT } from 'containers/sideBar/PlaylistContainer/AddPlaylist/constants';
import { REMOVE_PL_FROM_CAT } from 'containers/sideBar/PlaylistContainer/DeletePlaylist/constants';
import { UPDATE_PL_IN_CAT }  from 'containers/sideBar/PlaylistContainer/EditPlaylist/constants';

import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  CATEGORY_ATTEMPT,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILED,
} from './constants';


const blankError = fromJS({});

const initialState = fromJS({
  categories: fromJS({}),
  isLoading: true,
  isCatLoading: false,
  error: blankError,
  catError: blankError,
});

function sideBarReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return state
        .set('isLoading', true)
        .set('error', blankError);
    case GET_CATEGORIES_SUCCESS:
      return state
        .set('categories', fromJS(action.cats))
        .set('isLoading', false);
    case GET_CATEGORIES_FAILED:
      return state
        .set('isLoading', false)
        .set('error', fromJS(action.error));
    case CATEGORY_ATTEMPT:
      return state
        .set('isCatLoading', true)
        .set('catError', blankError);
    case ADD_CATEGORY_SUCCESS:
      return state
        .set('isCatLoading', false)
        .update('categories', categories => categories.push(fromJS(action.category)));
    case ADD_CATEGORY_FAILED:
      return state
        .set('isCatLoading', false)
        .set('catError', fromJS(action.error));
    case DELETE_CATEGORY_SUCCESS:
      return state
        .set('isCatLoading', false)
        .update('categories', categories => categories.filter(cat => cat.catid !== action.catId));
    case DELETE_CATEGORY_FAILED:
      return state
        .set('isCatLoading', false)
        .update('catError', fromJS(action.error));
    case EDIT_CATEGORY_SUCCESS: {
      let index = state.get('categories').findIndex(i => i.catid === action.category.catid);
      return state
        .set('isCatLoading', false)
        .updateIn(['categories', index], fromJS(action.category))
    }
    case EDIT_CATEGORY_FAILED:
      return state
        .set('isCatLoading', false)
        .set('catError', fromJS(action.error));
    case ADD_PL_TO_CAT:
      return state
        .update('categories', cats => cats.find(cat => cat.catid === action.catId).update('pls', pls => pls.push(fromJS(action.playlist))));
    case REMOVE_PL_FROM_CAT:
      return state
        .update('categories', cats => cats.find(cat => cat.catid === action.catid).update('pls', pls => pls.filter(pl =>  pl.plid !== action.plId )));
    case UPDATE_PL_IN_CAT: {
      const catIndex = state.get('categories').findIndex(cat => cat.catid === action.catId);
      const plIndex = state.getIn(['categories', catIndex, 'pls']).findIndex(pl => pl.plid === action.playlist.plId);
      return state
        .updateIn(['categories', catIndex, 'pls'], pls => pls.set(plIndex, fromJS(action.playlist)));
    }
    default:
      return state;
  }
}

export default sideBarReducer;
