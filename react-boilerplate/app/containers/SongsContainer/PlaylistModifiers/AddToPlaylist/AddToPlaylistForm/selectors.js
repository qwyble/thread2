import { createSelector } from 'reselect';

export const selectAddToPlaylistState = state => state;

export const makeSelectIsLoading = () =>
  createSelector(
    selectAddToPlaylistState,
    state => state.get('isLoading')
  );

export const makeSelectError = () =>
  createSelector(
    selectAddToPlaylistState,
    state => state.get('error')
  );
