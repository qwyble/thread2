import { createSelector } from 'reselect';

export const selectSearchBarState = state => state.get('SearchBar');

export const makeSelectIsLoading = () =>
  createSelector(
    selectSearchBarState,
    state => state.isLoading
  );

export const makeSelectUsers = () =>
  createSelector(
    selectSearchBarState,
    state => state.users
  );

export const makeSelectPlaylists = () =>
  createSelector(
    selectSearchBarState,
    state => state.playlists
  );

export const makeSelectSongs = () =>
  createSelector(
    selectSearchBarState,
    state => state.songs
  );
