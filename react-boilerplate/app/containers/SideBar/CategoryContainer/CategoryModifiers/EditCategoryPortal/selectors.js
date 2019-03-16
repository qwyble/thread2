import { createSelector } from 'reselect';

const selectEditCategoryPortalState = state => state.get('EditCategoryPortal');

export const makeSelectEditedCategory = () =>
  createSelector(
    selectEditCategoryPortalState,
    substate => substate.get('category')
  );

export const makeSelectEditedCategoryId = () =>
  createSelector(
    makeSelectEditedCategory(),
    category => category.get('catid')
  );

export const makeSelectEditedCategoryName = () =>
  createSelector(
    makeSelectEditedCategory(),
    category => category.get('catname')
  );

export const makeSelectWhichPortal = () =>
  createSelector(
    selectEditCategoryPortalState,
    substate => substate.get('whichPortal')
  );

export const makeSelectIsOpen = () =>
  createSelector(
    makeSelectEditedCategoryId(),
    catid => !!catid
  );
