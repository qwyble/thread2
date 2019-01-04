import { createSelector } from 'reselect';

import { selectCategoryContainer } from 'containers/SideBar/CategoryContainer/selectors';

export const makeSelectRenameCategory = () =>
  createSelector(
    selectCategoryContainer,
    state => state.get('RenameCategory')
  );

export const makeSelectIsLoading = () =>
  createSelector(
    makeSelectRenameCategory,
    state => state.get('isLoading')
  );
