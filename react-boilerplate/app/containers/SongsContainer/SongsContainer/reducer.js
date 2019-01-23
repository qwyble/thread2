import { fromJS } from 'immutable';

import { CHANGE_RATING } from 'containers/SongsContainer/SongRowsContainer/constants';

import {
  GET_SONGS,
  SELECT_SONG,
  DESELECT_SONG,
  SET_CURRENT_PAGE_REDUCTION,
  GET_SONGS_FAILED,
  SORT_BY_REDUCTION,
  GET_SONGS_SUCCESS,
  SET_DESCENDING_REDUCTION,
  REMOVE_SONGS_FROM_PLAYLIST,
  ADD_SONG_TO_STREAM,
  SET_IS_LOADING,
} from './constants';

const initialState = fromJS({
  songs: [],
  isLoading: true,
  songsTable: {
    CurrentItem: 0,
    totalPages: 1,
    selectedSongs: [],
    noneSelected: true,
    descending: 'DESC',
    sortBy: 'dateUploaded',
  },
});

export default function SongsContainer(state = initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      return state
        .set('isLoading', true)
        .set('CurrentItem', 0)
        .set('totalPages', 1);
    case SET_IS_LOADING:
      return state.set('isLoading', true);
    case GET_SONGS_SUCCESS: {
      return state
        .set('isLoading', false)
        .set('songs', fromJS(action.songs))
        .setIn(['songsTable', 'totalPages'], Math.ceil(action.count / 20));
    }
    case GET_SONGS_FAILED:
      return state;
    case REMOVE_SONGS_FROM_PLAYLIST:
      return state.update('songs', songs =>
        songs.filter(song => action.songIds.indexOf(song.idSongs) === -1)
      );
    case SET_CURRENT_PAGE_REDUCTION:
      return state.setIn(['songsTable', 'CurrentItem'], action.page);
    case SELECT_SONG: {
      console.log('selecting song');
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
      if (state.get('descending') === 'DESC')
        return state.set('descending', 'ASC');
      return state.set('descending', 'DESC');
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
