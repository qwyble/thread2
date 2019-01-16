import { createSelector } from 'reselect';
import { selectCategoryContainer } from 'containers/SideBar/CategoryContainer/selectors';

export const makeSelectAddCategory = () =>
  createSelector(
    selectCategoryContainer,
    state => state.AddCategory
  );

export const makeSelectIsLoading = () =>
  createSelector(
    makeSelectAddCategory(),
    state => state.get('isLoading')
  );
