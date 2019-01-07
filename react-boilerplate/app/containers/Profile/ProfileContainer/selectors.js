import { createSelector } from 'reselect';

export const selectProfileContainerState = state =>
  state.get('ProfileContainer');

export const makeSelectGetUserIsLoading = () =>
  createSelector(
    selectProfileContainerState,
    state => state.get('getUserIsLoading')
  );

export const makeSelectImageIsLoading = () =>
  createSelector(
    selectProfileContainerState,
    state => state.get('imageIsLoading')
  );

export const makeSelectEditIsLoading = () =>
  createSelector(
    selectProfileContainerState,
    state => state.get('editIsLoading')
  );

export const makeSelectUser = () =>
  createSelector(
    selectProfileContainerState,
    state => state.get('user')
  );
