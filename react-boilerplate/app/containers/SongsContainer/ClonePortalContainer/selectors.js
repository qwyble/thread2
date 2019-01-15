import { createSelector } from 'reselect';

export const selectClonePortalState = state => state.get('ClonePortal');

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
