import { createSelector } from 'reselect';

export const selectSuccessState = state => state.get('GlobalSuccess');

export const makeSelectSuccess = () =>
  createSelector(
    selectSuccessState,
    state => state.get('success')
  );
