import { createSelector } from 'reselect';

export const selectSongRowsContainerState = state =>
  state.get('SongRowContainer');

export const makeSelectIsLoading = () =>
  createSelector(
    selectSongRowsContainerState,
    state => state.get('isLoading')
  );

export const makeSelectSongId = () =>
  createSelector(
    selectSongRowsContainerState,
    state => state.get('songId')
  );
