import { createSelector } from 'reselect';

export const selectDeleteThreadState = state => state.get('DeleteThread');

export const makeSelectIsLoading = () =>
  createSelector(
    selectDeleteThreadState,
    state => state.get('DeleteThread')
  );

export const makeSelectDidSucceed = () =>
  createSelector(
    selectDeleteThreadState,
    state => state.get('didSucceed')
  );
