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
    makeSelectPlaylistParam,
    sideBarState,
    (playlistParam, state) => state.get('selectedPlaylist') || playlistParam
  );

export const makeSelectSelectedPlName = () =>
  createSelector(
    sideBarState,
    state => state.get('selectedPlName')
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
