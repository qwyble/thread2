import { createSelector } from 'reselect';

const selectAddCategoryContainer = state => state.get('AddCategory');

export const makeSelectIsLoading = () =>
  createSelector(
    selectAddCategoryContainer,
    state => state.get('isLoading')
  );
