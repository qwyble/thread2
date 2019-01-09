import { createSelector } from 'reselect';

export const selectAddCommentState = state => state.get('AddCommentContainer');

export const makeSelectIsLoading = () =>
  createSelector(
    selectAddCommentState,
    state => state.get('isLoading')
  );

export const makeSelectDidSucceed = () =>
  createSelector(
    selectAddCommentState,
    state => state.get('didSucceed')
  );
