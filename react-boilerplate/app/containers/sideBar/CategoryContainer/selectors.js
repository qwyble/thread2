import { createSelector } from 'reselect';


export const makeSelectIsLoading = () => createSelector(
  sideBarState,
  state => state.get('isLoading')
);

export const makeSelectCategories = () => createSelector(
  sideBarState,
  state => state.get('categories')
);
