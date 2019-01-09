import { createSelector } from 'reselect';
import { makeSelectParams } from 'containers/AppUtilities/ProfileContext/selectors';

export const selectThreadViewState = state => state.get('ThreadView');

export const makeSelectIsLoading = () =>
  createSelector(
    selectThreadViewState,
    state => state.get('isLoading')
  );

export const makeSelectThread = () =>
  createSelector(
    selectThreadViewState,
    state => state.get('thread')
  );

export const makeSelectComments = () =>
  createSelector(
    selectThreadViewState,
    state => state.get('comments')
  );

export const makeSelectThreadIdParam = () =>
  createSelector(
    makeSelectParams,
    params => params.id
  );

export const makeSelectThreadOwnerId = () =>
  createSelector(
    makeSelectThread,
    thread => thread.get('UserId')
  );
