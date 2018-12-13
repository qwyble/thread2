import { fromJS } from 'immutable';
import { GET_CATS, GET_CATS_SUCCESS, GET_CATS_FAILED } from './constants';

const blankProfile = fromJS({});
const blankError = fromJS({});

const initialState = fromJS({
  isLoading: true,
  categories: fromJS({}),
  profile: blankProfile,
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATS:
      return state
        .set('isLoading', true)
        .set('error', blankError);
    case GET_CATS_SUCCESS:
      return state
        .set('isLoading', false)
        .set('categories', action.cats)
        .set('profile', action.owner)
    case GET_CATS_FAILED:
      return state
        .set('isLoading', false)
        .set('error', fromJS(action.error));
    default:
      return state;
  }
}

export default profileReducer;
