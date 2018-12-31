import { fromJS } from 'immutable';
import { SET_ERROR, REMOVE_ERROR } from './constants';

const initialState = fromJS({
  error: '',
});

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return state.set('error', action.error);
    case REMOVE_ERROR:
      return state.set('error', '');
    default:
      return state;
  }
}
