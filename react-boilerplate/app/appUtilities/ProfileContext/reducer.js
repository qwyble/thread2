import { fromJS } from 'immutable';
import { SET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILED } from './constants';

const blankProfile = fromJS({});
const blankError = fromJS({});

const initialState = fromJS({
  error: blankError,
  profile: blankProfile,
  isLoading: true,
  profileError: blankError,
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return state
        .set('profile', fromJS(action.profile))
        .set('isLoading', false);
    case GET_PROFILE:
      return state
        .set('isLoading', true)
        .set('profileError', blankError);
    case GET_PROFILE_SUCCESS:
      return state
        .set('isLoading', false)
        .set('profile', fromJS(action.profile);
    case GET_PROFILE_FAILED:
      return state
        .set('isLoading',false)
        .set('profileError', fromJS(action.error));
    default:
      return state;
  }
}

export default profileReducer;
