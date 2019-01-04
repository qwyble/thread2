import { createSelector } from 'reselect';

export const selectErrorState = state => state.get('GlobalError');

export const makeSelectError = () =>
  createSelector(
    selectErrorState,
    state => state.get('error')
  );
