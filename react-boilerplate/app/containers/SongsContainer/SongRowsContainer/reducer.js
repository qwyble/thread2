import { fromJS } from 'immutable';

import { RATE_SONG, RATE_SONG_COMPLETED } from './constants';

const initialState = fromJS({
  isLoading: false,
  songId: '',
});

export default function rateSong(state = initialState, action) {
  switch (action.type) {
    case RATE_SONG:
      return state.set('isLoading', true).set('songId', action.idSongs);
    case RATE_SONG_COMPLETED:
      return state.set('isLoading', false).set('songId', '');
    default:
      return state;
  }
}
