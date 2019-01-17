import { createSelector } from 'reselect';

const selectDeleteCategoryContainer = () => state.get('DeleteCategory');

export const makeSelectIsLoading = () =>
  createSelector(
    selectDeleteCategoryContainer,
    state => state.get('isLoading')
  );
