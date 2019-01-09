import { createSelector } from 'reselect';

export const selectThreadComposerState = state => state.get('ThreadComposer');

export const makeSelectIsLoading = () =>
  createSelector(
    selectThreadComposerState,
    state => state.get('isLoading')
  );

export const makeSelectDidSucceed = () =>
  createSelector(
    selectThreadComposerState,
    state => state.get('didSucceed')
  );
