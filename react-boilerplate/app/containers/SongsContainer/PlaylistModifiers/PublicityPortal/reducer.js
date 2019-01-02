import { fromJS } from 'immutable';
import { MAKE_PUBLIC, MAKE_PUBLIC_COMPLETE } from './constants';

const initialState = fromJS({
  isLoading: false,
});

export default function PublicityReducer(state = initialState, action) {
  switch (action.type) {
    case MAKE_PUBLIC:
      return state.set('isLoading', true);
    case MAKE_PUBLIC_COMPLETE:
      return state.set('isLoading', false);
    default:
      return state;
  }
}
