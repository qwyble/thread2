import { createSelector } from 'reselect';
import { makeSelectParams } from 'containers/AppUtilities/ProfileContext/selectors';

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

export const makeSelectPlaylistParam = () =>
  createSelector(
    makeSelectParams(),
    params => params.get('playlist')
  );
