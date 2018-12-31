import { createSelector } from 'reselect';

export const selectErrorState = state => state;

export const makeSelectError = () =>
  createSelector(
    selectErrorState,
    state => state.get('error')
  );
