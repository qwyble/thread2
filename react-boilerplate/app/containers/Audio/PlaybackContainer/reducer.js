import { fromJS } from 'immutable';
import { HANDLE_PLAYING, HANDLE_PAUSING, RESET_LIST } from './constants';

const initialState = fromJS({
  paused: true,
  nowPlaying: {},
});

export default function audioContextReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_PLAYING:
      return state.set('paused', false).set('nowPlaying', action.song);
    case HANDLE_PAUSING:
      return state.set('paused', !state.paused);
    case RESET_LIST:
      return state.set('nowPlaying', fromJS({})).set('paused', true);
    default:
      return state;
  }
}
