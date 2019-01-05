import { fromJS } from 'immutable';
import {
  GET_FOLLOWERS,
  GET_FOLLOWERS_COMPLETED,
  GET_FOLLOWERS_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: true,
  followers: fromJS([]),
});

export default function FollowersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOLLOWERS:
      return state.set('isLoading', true);
    case GET_FOLLOWERS_COMPLETED:
      return state
        .set('isLoading', false)
        .set('followers', fromJS(action.followers));
    case GET_FOLLOWERS_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
