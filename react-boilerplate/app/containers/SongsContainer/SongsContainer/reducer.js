import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import songAdder from 'containers/SongsContainer/PlaylistModifiers/SongAdder/reducer';
import songRemover from 'containers/SongsContainer/PlaylistModifiers/SongRemover/reducer';
import { CHANGE_RATING } from 'containers/SongsContainer/SongRowsContainer/constants';
import {
  GET_SONGS,
  SELECT_SONG,
  DESELECT_SONG,
  SET_CURRENT_PAGE,
  GET_SONGS_FAILED,
  SORT_BY_REDUCTION,
  GET_SONGS_SUCCESS,
  SET_DESCENDING_REDUCTION,
  REMOVE_SONGS_FROM_PLAYLIST,
  ADD_SONG_TO_STREAM,
} from './constants';

export default combineReducers({
  songsContainer,
  songAdder,
  songRemover,
});

const initialState = {
  songs: fromJS({}),
  isLoading: true,
  songsTable: {
    currentPage: 0,
    totalPages: 1,
    selectedSongs: fromJS([]),
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
        .set('currentPage', 0)
        .set('totalPages', 1);
    case GET_SONGS_SUCCESS:
      return state
        .set('isLoading', false)
        .set('songs', fromJS(action.songs))
        .setIn(['songsTable', 'totalPages'], action.songs.length / 20);
    case GET_SONGS_FAILED:
      return state.set('isLoading', false);
    case REMOVE_SONGS_FROM_PLAYLIST:
      return state.update('songs', songs =>
        songs.filter(song => action.songIds.indexOf(song.idSongs) === -1)
      );
    case SET_CURRENT_PAGE:
      return state.setIn(['songsTable', 'currentPage'], action.currentPage);
    case SELECT_SONG: {
      const songIndex = state
        .get('songs')
        .findIndex(song => song.get('idSongs') === action.idSongs);
      return state
        .updateIn(['songsTable', 'selectedSongs'], selectedSongs =>
          selectedSongs.push(action.idSongs)
        )
        .updateIn(['songs', songIndex], song =>
          song.merge({ isSelected: true })
        );
    }
    case DESELECT_SONG: {
      const songIndex = state
        .get('songs')
        .findIndex(song => song.get('idSongs') === action.idSongs);
      return state
        .updateIn(['songsTable', 'selectedSongs'], selectedSongs =>
          selectedSongs.filter(idSongs => idSongs !== action.idSongs)
        )
        .updateIn(['songs', songIndex], song =>
          song.merge({ isSelected: false })
        );
    }
    case SET_DESCENDING_REDUCTION:
      return state.set('descending', !state.get('descending'));
    case SORT_BY_REDUCTION:
      return state.set('sortBy', action.sortParam);
    case CHANGE_RATING: {
      const songIndex = state
        .get('songs')
        .findIndex(song => song.idSongs === action.idSongs);
      return state.updateIn(['songs', songIndex, 'rating'], action.rating);
    }
    case ADD_SONG_TO_STREAM:
      return state.set('songs', state.get('songs').concat(fromJS(action.song)));
    default:
      return state;
  }
}
