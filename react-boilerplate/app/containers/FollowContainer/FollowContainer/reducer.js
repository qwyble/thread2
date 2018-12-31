import { fromJS } from 'immutable';
import {
  GET_IS_FOLLOWING,
  GET_IS_FOLLOWING_COMPLETE,
  FOLLOW_USER,
  FOLLOW_USER_COMPLETE,
} from './constants';

const initialState = fromJS({
  isLoading: true,
  isFollowing: false,
});

export default function followContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IS_FOLLOWING:
      return state.set('isLoading', true);
    case GET_IS_FOLLOWING_COMPLETE:
      return state
        .set('isLoading', false)
        .set('isFollowing', action.isFollowing);
    case FOLLOW_USER:
      return state.set('isLoading', true);
    case FOLLOW_USER_COMPLETE:
      return state
        .set('isLoading', false)
        .set('isFollowing', action.isFollowing);
    default:
      return state;
  }
}
