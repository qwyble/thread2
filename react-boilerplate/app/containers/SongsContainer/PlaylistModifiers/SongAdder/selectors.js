import { createSelector } from 'reselect';

export const selectAddToPlaylistState = state => state;

export const makeSelectIsLoading = () =>
  createSelector(
    selectAddToPlaylistState,
    state => state.get('isLoading')
  );
