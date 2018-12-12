import { fromJS } from 'immutable';

import { AUTH, AUTH_SUCCESS, AUTH_FAILED } from './constants';

const initialState = fromJS({
  user: {},
  isLoggedIn: false,
  isLoading: true,
  error: false,
});

const blankError = fromJS({});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      return state
        .set('isLoading', true)
        .set('error', blankError);
    case AUTH_SUCCESS:
      return state
        .set('isLoggedIn', true)
        .set('user', fromJS(action.user))
        .set('error', blankError)
        .set('isLoading', false);
    case AUTH_FAILED:
      return state
        .set('isLoading', false)
        .set('error', action.error);
    default:
      return state;
  }
}


export default userReducer;
