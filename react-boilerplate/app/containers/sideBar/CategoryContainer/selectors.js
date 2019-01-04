import { createSelector } from 'reselect';

export const selectCategoryContainer = state => state.get('CategoryContainer');

export const makeSelectIsLoading = () =>
  createSelector(
    selectCategoryContainer,
    state => state.get('isLoading')
  );

export const makeSelectCategories = () =>
  createSelector(
    selectCategoryContainer,
    state => state.get('categories')
  );
