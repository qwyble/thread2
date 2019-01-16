import { createSelector } from 'reselect';

export const sideBarState = state => state.get('SideBarContainer');

export const makeSelectSelectedPlaylist = () =>
  createSelector(
    sideBarState,
    state => state.get('selectedPlaylist') || undefined
  );

export const makeSelectSelectedPlid = () =>
  createSelector(
    makeSelectSelectedPlaylist(),
    playlist => playlist.get('plid')
  );

export const makeSelectSelectedPlIsOwner = () =>
  createSelector(
    makeSelectSelectedPlaylist(),
    selectedPlaylist => selectedPlaylist.get('isOwner')
  );

export const makeSelectSelectedPlName = () =>
  createSelector(
    makeSelectSelectedPlaylist(),
    playlist => playlist.get('plname')
  );

export const makeSelectVisibility = () =>
  createSelector(
    sideBarState,
    state => state.get('isVisible')
  );

export const makeSelectSelectedCategory = () =>
  createSelector(
    sideBarState,
    state => state.get('selectedCategory') || undefined
  );

export const makeSelectSelectedCategoryId = () =>
  createSelector(
    makeSelectSelectedCategory(),
    cat => cat.get('catid')
  );
