import { fromJS } from 'immutable';
import {
  GET_USER,
  GET_USER_COMPLETED,
  GET_USER_FAILED,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_COMPLETED,
  UPLOAD_IMAGE_FAILED,
  EDIT_USER,
  EDIT_USER_COMPLETED,
  EDIT_USER_FAILED,
} from './constants';

const initialState = fromJS({
  user: {},
  getUserIsLoading: true,
  imageIsLoading: false,
  editIsLoading: false,
});

export default function ProfileContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return state.set('getUserIsLoading', true);
    case GET_USER_COMPLETED:
      return state
        .set('getUserIsLoading', false)
        .set('user', fromJS(action.user));
    case GET_USER_FAILED:
      return state.set('getUserIsLoading', false);
    case EDIT_USER:
      return state.set('editIsLoading', true);
    case EDIT_USER_COMPLETED:
      // action.user is already an immutable object here
      return state.set('editIsLoading', false).set('user', action.user);
    case EDIT_USER_FAILED:
      return state.set('editIsLoading', false);
    case UPLOAD_IMAGE:
      return state.set('imageIsLoading', true);
    case UPLOAD_IMAGE_COMPLETED:
      return state
        .set('imageIsLoading', false)
        .setIn(['user', 'imageUrl'], action.imageUrl);
    case UPLOAD_IMAGE_FAILED:
      return state.set('imageIsLoading', false);
    default:
      return state;
  }
}
