import { createSelector } from 'reselect';

export const selectAddToPlaylistState = state => state.get('SongAdder');

export const makeSelectIsLoading = () =>
  createSelector(
    selectAddToPlaylistState,
    state => state.get('isLoading')
  );
