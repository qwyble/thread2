import { createSelector } from 'reselect';

export const selectCategoryContainer = state => state.get('CategoryContainer');

const makeSelectCatContainerState = () =>
  createSelector(
    selectCategoryContainer,
    container => container.Categories
  );

export const makeSelectIsLoading = () =>
  createSelector(
    makeSelectCatContainerState(),
    state => state.get('isLoading')
  );

export const makeSelectCategories = () =>
  createSelector(
    makeSelectCatContainerState(),
    state => state.get('categories')
  );
