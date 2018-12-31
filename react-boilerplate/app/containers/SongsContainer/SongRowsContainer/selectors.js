import { createSelector } from 'reselect';

export const selectSongRowsContainerState = state => state;

export const makeSelectIsLoading = () =>
  createSelector(
    selectSongRowsContainerState,
    state => state.get('isLoading')
  );

export const makeSelectError = () =>
  createSelector(
    selectSongRowsContainerState,
    state => state.get('error')
  );

export const makeSelectSongId = () =>
  createSelector(
    selectSongRowsContainerState,
    state => state.get('songId')
  );
