import { createSelector } from 'reselect';

export const selectClonePortalState = state => state;

export const makeSelectIsLoading = () =>
  createSelector(
    selectClonePortalState,
    state => state.get('isLoading')
  );

export const makeSelectDidSucceed = () =>
  createSelector(
    selectClonePortalState,
    state => state.get('didSucceed')
  );
