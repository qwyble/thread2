import { fromJS } from 'immutable';

import { AUTH_ATTEMPT, AUTH_SUCCESS, AUTH_FAILED } from './constants';

const initialState = fromJS({
  user: fromJS({}),
  isLoggedIn: false,
  isLoading: true,
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ATTEMPT:
      return state.set('isLoading', true);
    case AUTH_SUCCESS:
      return state
        .set('isLoggedIn', !!Object.keys(action.user).length)
        .set('user', fromJS(action.user))
        .set('isLoading', false);
    case AUTH_FAILED:
      return state
        .set('isLoading', false)
        .set('isLoggedIn', false)
        .set('user', fromJS({}));
    default:
      return state;
  }
}

export default userReducer;
