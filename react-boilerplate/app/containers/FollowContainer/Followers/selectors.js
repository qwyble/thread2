import { createSelector } from 'reselect';

export const selectFollowersState = state => state.get('Followers');

export const makeSelectIsLoading = () =>
  createSelector(
    selectFollowersState,
    state => state.get('isLoading')
  );

export const makeSelectFollowers = () =>
  createSelector(
    selectFollowersState,
    state => state.get('followers')
  );
