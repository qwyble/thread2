import { createSelector } from 'reselect';

export const selectSearchBarState = state => state.get('SearchBar');

export const makeSelectIsLoading = () =>
  createSelector(
    selectSearchBarState,
    state => state.get('isLoading')
  );

export const makeSelectUsers = () =>
  createSelector(
    selectSearchBarState,
    state => state.get('users')
  );

export const makeSelectPlaylists = () =>
  createSelector(
    selectSearchBarState,
    state => state.get('playlists')
  );

export const makeSelectSongs = () =>
  createSelector(
    selectSearchBarState,
    state => state.get('songs')
  );
