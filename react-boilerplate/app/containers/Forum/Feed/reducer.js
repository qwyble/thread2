import { fromJS } from 'immutable';
import { GET_FEED, GET_FEED_COMPLETED, GET_FEED_FAILED } from './constants';

const initialState = fromJS({
  feedEvents: [],
  isLoading: true,
});

export default function FeedReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FEED:
      return state.set('isLoading', true);
    case GET_FEED_COMPLETED:
      return state
        .set('isLoading', false)
        .set('feedEvents', fromJS(action.feedEvents));
    case GET_FEED_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
