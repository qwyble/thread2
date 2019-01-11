import { fromJS } from 'immutable';

import {
  GET_MESSAGES,
  GET_MESSAGES_COMPLETED,
  GET_MESSAGES_FAILED,
  DELETE_MESSAGES,
  DELETE_MESSAGES_COMPLETED,
  DELETE_MESSAGES_FAILED,
  SELECT_MESSAGE,
} from './constants';

const initialState = fromJS({
  isLoading: true,
  messages: [],
});

export default function MessagesContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return state.set('isLoading', true);
    case GET_MESSAGES_COMPLETED:
      return state
        .set('isLoading', false)
        .set('messages', fromJS(action.messages));
    case GET_MESSAGES_FAILED:
      return state.set('isLoading', false);
    case DELETE_MESSAGES:
      return state.set('isLoading', true);
    case DELETE_MESSAGES_COMPLETED:
      return state
        .set('isLoading', false)
        .update('messages', messages =>
          messages.filter(
            message => !action.messageIds.includes(message.idmessages)
          )
        );
    case DELETE_MESSAGES_FAILED:
      return state.set('isLoading', false);
    case SELECT_MESSAGE: {
      const messageIndex = state
        .get('messages')
        .findIndex(message => message.idmessages === action.id);
      const isSelected = state.getIn(['messages', messageIndex, 'selected']);
      return state.updateIn(
        ['messages', messageIndex, 'selected'],
        () => !isSelected
      );
    }
    default:
      return state;
  }
}
