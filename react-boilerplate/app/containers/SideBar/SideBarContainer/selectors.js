import { createSelector } from 'reselect';

import { makeSelectParams } from 'containers/AppUtilities/ProfileContext/selectors';

export const sideBarState = state => state.get('sideBar');

export const makeSelectPlaylistParam = () =>
  createSelector(
    makeSelectParams,
    params => params.playlist
  );

export const makeSelectSelectedPlaylist = () =>
  createSelector(
    sideBarState,
    state => state.get('selectedPlaylist') || undefined
  );

export const makeSelectSelectedPlid = () =>
  createSelector(
    makeSelectSelectedPlaylist,
    playlist => playlist.get('plid')
  );

export const makeSelectSelectedPlIsOwner = () =>
  createSelector(
    makeSelectSelectedPlaylist,
    selectedPlaylist => selectedPlaylist.get('isOwner')
  );

export const makeSelectSelectedPlName = () =>
  createSelector(
    makeSelectSelectedPlaylist,
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
    state => state.get('selectedCategory')
  );

export const makeSelectSelectedCategoryId = () =>
  createSelector(
    makeSelectSelectedCategory,
    cat => cat.get('catid')
  );
