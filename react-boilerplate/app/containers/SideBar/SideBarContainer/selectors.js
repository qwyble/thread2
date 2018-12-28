import { createSelector } from 'reselect';

export const sideBarState = state => state.get('sideBar');

export const makeSelectSelectedPlaylist = () =>
  createSelector(
    sideBarState,
    state => state.get('selectedPlaylist')
  );

export const makeSelectVisibility = () =>
  createSelector(
    sideBarState,
    state => state.get('isVisible')
  );

export const makeSelectSelectedCategory = () =>
  createSelector(
    sideBarState,
    state => state.get('selectedCategory')
  );
