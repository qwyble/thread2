import { createSelector } from 'reselect';

export const selectExplorerState = state => state.get('Explorer');

export const makeSelectIsLoading = () =>
  createSelector(
    selectExplorerState,
    state => state.get('isLoading')
  );

export const makeSelectUsers = () =>
  createSelector(
    selectExplorerState,
    state => state.get('users')
  );

export const makeSelectPlaylists = () =>
  createSelector(
    selectExplorerState,
    state => state.get('playlists')
  );

export const makeSelectSongs = () =>
  createSelector(
    selectExplorerState,
    state => state.get('songs')
  );
