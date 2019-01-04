import { fromJS } from 'immutable';
import { SET_SUCCESS, REMOVE_SUCCESS } from './constants';

const initialState = fromJS({
  success: '',
});

export default function successReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUCCESS:
      return state.set('success', action.success);
    case REMOVE_SUCCESS:
      return state.set('success', '');
    default:
      return state;
  }
}
