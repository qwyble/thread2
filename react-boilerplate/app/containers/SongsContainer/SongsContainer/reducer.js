import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import {
  GET_SONGS,
  GET_SONGS_SUCCESS,
  GET_SONGS_FAILED,
  REMOVE_SONGS_FROM_PLAYLIST,
  SET_CURRENT_PAGE,
  ADD_SONGS_TO_PLAYLIST,
  SELECT_SONG,
  DESELECT_SONG,
  SET_DESCENDING_REDUCTION,
  SORT_BY_REDUCTION,
} from './constants';

export default combineReducers({
  songsContainer,
  addSongToPlaylist,
  removeSongFromPlaylist,
});

const blankError = fromJS({});

const initialState = {
  songs: fromJS({}),
  isLoading: true,
  error: blankError,
  songsTable: {
    currentPage: 0,
    totalPages: 1,
    selectedSongs: fromJS({}),
    noneSelected: true,
    descending: true,
    sortBy: 'dateUploaded',
  },
};

export function songsContainer(state = initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      return state
        .set('isLoading', true)
        .set('error', blankError)
        .set('currentPage', 0)
        .set('totalPages', 1);
    case GET_SONGS_SUCCESS:
      return state
        .set('isLoading', false)
        .set('songs', fromJS(action.songs))
        .setIn(['songsTable', 'totalPages'], action.songs.length / 20);
    case GET_SONGS_FAILED:
      return state.set('isLoading', false).set('error', fromJS(action.error));
    case REMOVE_SONGS_FROM_PLAYLIST:
      return state.update('songs', songs =>
        songs.filter(song => action.songIds.indexOf(song.idSongs) === -1)
      );
    case ADD_SONGS_TO_PLAYLIST:
      return state.update('songs', songs => songs.concat(action.songs));
    case SET_CURRENT_PAGE:
      return state.setIn(['songsTable', 'currentPage'], action.currentPage);
    case SELECT_SONG:
      return state.updateIn(['songsTable', 'selectedSongs'], selectedSongs =>
        selectedSongs.push(action.song)
      );
    case DESELECT_SONG:
      return state.updateIn(['songsTable', 'selectedSongs'], selectedSongs =>
        selectedSongs.filter(idSongs => idSongs !== action.idSongs)
      );
    case SET_DESCENDING_REDUCTION:
      return state.set('descending', !state.get('descending'));
    case SORT_BY_REDUCTION:
      return state.set('sortBy', action.sortParam);
    default:
      return state;
  }
}
