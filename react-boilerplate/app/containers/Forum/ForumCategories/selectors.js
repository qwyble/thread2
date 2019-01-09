import { createSelector } from 'reselect';

export const selectCategoryContainer = state =>
  state.get('ForumCategoriesContainer');

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

export const makeSelectSelectedCategory = () =>
  createSelector(
    selectCategoryContainer,
    state => state.get('selectedCategory')
  );
