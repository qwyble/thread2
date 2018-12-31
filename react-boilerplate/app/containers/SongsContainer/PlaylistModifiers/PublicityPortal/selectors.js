import { createSelector } from 'reselect';

export const selectPublicityPortalState = state => state.get('PublicityPortal');

export const makeSelectIsLoading = () =>
  createSelector(
    selectPublicityPortalState,
    state => state.get('isLoading')
  );

export const makeSelectIsPublic = () =>
  createSelector(
    selectPublicityPortalState,
    state => state.get('isPublic')
  );
