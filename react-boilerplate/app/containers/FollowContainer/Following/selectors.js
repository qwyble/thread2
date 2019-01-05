import { createSelector } from 'reselect';

export const selectFollowingState = state => state.get('Following');

export const makeSelectIsLoading = () =>
  createSelector(
    selectFollowingState,
    state => state.get('isLoading')
  );

export const makeSelectFollowing = () =>
  createSelector(
    selectFollowingState,
    state => state.get('following')
  );
