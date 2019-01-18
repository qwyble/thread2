import { fromJS } from 'immutable';
import {
  SET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  GET_PROFILE,
  SET_PARAMS_CONTEXT,
} from './constants';

const blankProfile = fromJS({});

const initialState = fromJS({
  profile: blankProfile,
  isLoading: true,
  params: {},
  root: '',
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return state
        .set('profile', fromJS(action.profile))
        .set('isLoading', false);
    case GET_PROFILE:
      return state.set('isLoading', true);
    case GET_PROFILE_SUCCESS:
      return state
        .set('isLoading', false)
        .set('profile', fromJS(action.profile));
    case SET_PARAMS_CONTEXT:
      return state
        .set('params', fromJS(action.params))
        .set('root', action.root);
    default:
      return state;
  }
}

export default profileReducer;
