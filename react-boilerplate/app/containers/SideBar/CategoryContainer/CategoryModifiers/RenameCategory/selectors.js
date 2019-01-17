import { createSelector } from 'reselect';

const selectRenameCategoryState = state => state.get('RenameCategory');

export const makeSelectIsLoading = () =>
  createSelector(
    selectRenameCategoryState,
    state => state.get('isLoading')
  );
