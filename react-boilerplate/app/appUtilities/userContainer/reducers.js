import { fromJS } from 'immutable';

import { AUTH_ATTEMPT, AUTH_SUCCESS, AUTH_FAILED } from './constants';


const blankError = fromJS({});

const initialState = fromJS({
  user: fromJS({}),
  isLoggedIn: false,
  isLoading: true,
  error: blankError,
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ATTEMPT:
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
        .set('error', fromJS(action.error));
    default:
      return state;
  }
}


export default userReducer;
