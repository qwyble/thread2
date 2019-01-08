import { fromJS } from 'immutable';
import { GET_THREADS, GET_THREADS_COMPLETED } from './constants';

const initialState = fromJS({
  isLoading: true,
  threads: [],
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_THREADS:
      return state.set('isLoading', true);
    case GET_THREADS_COMPLETED:
      return state
        .set('isLoading', false)
        .set('threads', fromJS(action.threads));
    default:
      return state;
  }
}
