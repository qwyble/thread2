import { fromJS } from 'immutable';
import {
  GET_SONGS,
  GET_SONGS_SUCCESS,
  GET_SONGS_FAILED,
  REMOVE_SONGS_FROM_PLAYLIST,
  SET_CURRENT_PAGE,
  ADD_SONGS_TO_PLAYLIST,
} from './constants';

const blankError = fromJS({});

const initialState = {
  songs: fromJS({}),
  isLoading: true,
  error: blankError,
  currentPage: 0,
  totalPages: 1,
};

export function songsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      return state
        .set('isLoading', true)
        .set('error', blankError)
        .set('currentPage', 0)
        .set('totalPages', 1);
    case GET_SONGS_SUCCESS:
      return state.set('isLoading', false).set('songs', fromJS(action.songs));
    case GET_SONGS_FAILED:
      return state.set('isLoading', false).set('error', fromJS(action.error));
    case REMOVE_SONGS_FROM_PLAYLIST:
      return state.update('songs', songs =>
        songs.filter(song => action.songIds.indexOf(song.idSongs) === -1)
      );
    case ADD_SONGS_TO_PLAYLIST:
      return state.update('songs', songs => songs.concat(action.songs));
    case SET_CURRENT_PAGE:
      return state.set('currentPage', action.currentPage);
    default:
      return state;
  }
}
