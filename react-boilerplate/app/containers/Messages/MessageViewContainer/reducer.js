import { fromJS } from 'immutable';

import {
  GET_MESSAGE,
  GET_MESSAGE_COMPLETED,
  GET_MESSAGE_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: true,
  message: {},
});

export default function MessageViewContainerReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case GET_MESSAGE:
      return state.set('isLoading', true);
    case GET_MESSAGE_COMPLETED:
      return state.set('isLoading', false).set('message', action.message);
    case GET_MESSAGE_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
