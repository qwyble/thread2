import { fromJS } from 'immutable';

import {
  SEND_MESSAGE,
  SEND_MESSAGE_COMPLETED,
  SEND_MESSAGE_FAILED,
  GET_USERS_COMPLETED,
} from './constants';

const initialState = fromJS({
  isLoading: false,
  users: [],
  sentMessage: {},
});

export default function MessageComposerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_COMPLETED:
      return state
        .set('usersAreLoading', false)
        .set('users', fromJS(action.users));
    case SEND_MESSAGE:
      return state.set('isLoading', true);
    case SEND_MESSAGE_COMPLETED:
      return state
        .set('isLoading', false)
        .set('sentMessage', fromJS(action.message));
    case SEND_MESSAGE_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
