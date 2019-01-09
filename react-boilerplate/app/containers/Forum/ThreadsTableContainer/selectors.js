import { createSelector } from 'reselect';

export const selectThreadsContainerState = state =>
  state.get('ThreadsContainer');

export const makeSelectIsLoading = () =>
  createSelector(
    selectThreadsContainerState,
    state => state.get('isLoading')
  );

export const makeSelectThreads = () =>
  createSelector(
    selectThreadsContainerState,
    state => state.get('threads')
  );
