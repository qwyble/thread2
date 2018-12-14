import { fromJS } from 'immutable';
import { GET_CATS, GET_CATS_SUCCESS, GET_CATS_FAILED, SET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILED } from './constants';

const blankProfile = fromJS({});
const blankError = fromJS({});

const initialState = fromJS({
  error: blankError,
  catsIsLoading: true,
  profile: blankProfile,
  categories: fromJS({}),
  profileIsLoading: false,
  profileError: blankError,
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATS:
      return state
        .set('catsIsLoading', true)
        .set('error', blankError);
    case SET_PROFILE:
      return state
        .set('profile', fromJS(action.profile));
    case GET_CATS_SUCCESS:
      return state
        .set('catsIsLoading', false)
        .set('categories', fromJS(action.cats));
    case GET_CATS_FAILED:
      return state
        .set('catsIsLoading', false)
        .set('error', fromJS(action.error));
    case GET_PROFILE:
      return state
        .set('profileIsLoading', true)
        .set('profileError', blankError);
    case GET_PROFILE_SUCCESS:
      return state
        .set('profileIsLoading', false)
        .set('profile', fromJS(action.profile);
    case GET_PROFILE_FAILED:
      return state
        .set('profileIsLoading',false)
        .set('profileError', fromJS(action.error));
    default:
      return state;
  }
}

export default profileReducer;
