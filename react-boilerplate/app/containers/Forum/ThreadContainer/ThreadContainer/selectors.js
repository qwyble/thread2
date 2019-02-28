import { createSelector } from 'reselect';

export const selectThreadContainerState = state => state.get('ThreadContainer');

export const makeSelectIsLoading = () =>
  createSelector(
    selectThreadContainerState,
    state => state.get('isLoading')
  );

export const makeSelectThread = () =>
  createSelector(
    selectThreadContainerState,
    state => state.get('thread')
  );

export const makeSelectComments = () =>
  createSelector(
    selectThreadContainerState,
    state => state.get('comments')
  );

export const makeSelectThreadOwnerId = () =>
  createSelector(
    makeSelectThread(),
    thread => thread.get('UserId')
  );

export const makeSelectThreadId = () =>
  createSelector(
    makeSelectThread(),
    thread => thread.get('idThreadPost')
  );

export const makeSelectCommentsLoading = () =>
  createSelector(
    selectThreadContainerState,
    thread => thread.get('commentsLoading')
  );
