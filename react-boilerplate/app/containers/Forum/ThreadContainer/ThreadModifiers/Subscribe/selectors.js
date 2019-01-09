import { createSelector } from 'reselect';

export const selectSubscribeState = state => state.get('SubscribeContainer');

export const makeSelectIsLoading = () =>
  createSelector(
    selectSubscribeState,
    state => state.get('isLoading')
  );

export const makeSelectIsSubscribed = () =>
  createSelector(
    selectSubscribeState,
    state => state.get('subscribed')
  );
