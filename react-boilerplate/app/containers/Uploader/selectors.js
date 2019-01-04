import { createSelector } from 'reselect';

export const selectUploaderState = state => state.get('UploadModal');

export const makeSelectIsLoading = () =>
  createSelector(
    selectUploaderState,
    state => state.get('isLoading')
  );

export const makeSelectDidSucceed = () =>
  createSelector(
    selectUploaderState,
    state => state.get('didSucceed')
  );
