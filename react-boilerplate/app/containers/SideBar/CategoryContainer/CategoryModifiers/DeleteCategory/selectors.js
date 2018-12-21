import { createSelector } from 'reselect';

import { selectCategoryContainer } from 'containers/SideBar/CategoryContainer/selectors';

export const makeSelectDeleteCategory = () => createSelector(
  selectCategoryContainer,
  state => state.get('DeleteCategory'),
);

export const makeSelectIsLoading = () => createSelector(
  makeSelectDeleteCategory,
  state => state.get('isLoading')
);

export const makeSelectError = () => createSelector(
  makeSelectDeleteCategory,
  state => state.get('error')
);
