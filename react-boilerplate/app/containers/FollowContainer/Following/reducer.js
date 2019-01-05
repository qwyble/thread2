import { fromJS } from 'immutable';
import {
  GET_FOLLOWING,
  GET_FOLLOWING_COMPLETED,
  GET_FOLLOWING_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: true,
  following: fromJS([]),
});

export default function FollowingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOLLOWING:
      return state.set('isLoading', true);
    case GET_FOLLOWING_COMPLETED:
      return state
        .set('isLoading', false)
        .set('following', fromJS(action.following));
    case GET_FOLLOWING_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
