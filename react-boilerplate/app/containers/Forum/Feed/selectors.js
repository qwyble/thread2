import { createSelector } from 'reselect';

export const selectFeedState = state => state.get('ForumFeedContainer');

export const makeSelectIsLoading = () =>
  createSelector(
    selectFeedState,
    state => state.get('isLoading')
  );

export const makeSelectFeedEvents = () =>
  createSelector(
    selectFeedState,
    state => state.get('feedEvents')
  );
