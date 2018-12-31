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
    makeSelectedPlaylistByParam,
    sideBarState,
    (playlist, state) => state.get('selectedPlaylist') || playlist
  );

export const makeSelectSelectedPlid = () =>
  createSelector(
    makeSelectSelectedPlaylist,
    playlist => playlist.get('plid')
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
