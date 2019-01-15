import { createSelector } from 'reselect';

export const selectFollowContainerState = state => state.get('FollowContainer');

export const makeSelectIsFollowing = () =>
  createSelector(
    selectFollowContainerState,
    state => state.get('isFollowing')
  );

export const makeSelectIsLoading = () =>
  createSelector(
    selectFollowContainerState,
    state => state.get('isLoading')
  );
