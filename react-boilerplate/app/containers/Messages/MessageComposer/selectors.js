import { createSelector } from 'reselect';

const selectMessageComposerState = state => state.get('MessageComposer');

export const makeSelectIsLoading = () =>
  createSelector(
    selectMessageComposerState,
    state => state.get('isLoading')
  );

export const makeSelectUsers = () =>
  createSelector(
    selectMessageComposerState,
    state => state.get('users')
  );

export const makeSelectSentMessage = () =>
  createSelector(
    selectMessageComposerState,
    state => state.get('sentMessage')
  );
