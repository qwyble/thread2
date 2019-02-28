import { fromJS } from 'immutable';

import {
  GET_SUBSCRIBED,
  GET_SUBSCRIBED_COMPLETED,
  GET_SUBSCRIBED_FAILED,
  SUBSCRIBE,
  SUBSCRIBE_COMPLETED,
  SUBSCRIBE_FAILED,
} from './constants';

const initialState = fromJS({
  subscribed: false,
  isLoading: true,
});

export default function SubscribeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUBSCRIBED:
      return state.set('isLoading', true);
    case GET_SUBSCRIBED_COMPLETED:
      return state.set('isLoading', false).set('subscribed', action.subbed);
    case GET_SUBSCRIBED_FAILED:
      return state.set('isLoading', false);
    case SUBSCRIBE:
      return state.set('isLoading', true);
    case SUBSCRIBE_COMPLETED:
      return state
        .set('isLoading', false)
        .set('subscribed', !state.get('subscribed'));
    case SUBSCRIBE_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
