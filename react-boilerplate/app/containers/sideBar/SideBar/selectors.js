import { createSelector } from 'reselect';
import { makeSelectParams } from '../../../appUtilities/ProfileContext/selectors';


export const sideBarState = state => state.get('sideBar');

export const makeSelectPlaylistParam = () => createSelector(
  makeSelectParams,
  params => params.get('playlist')
);

export const makeSelectPlaylist = () => createSelector(
  sideBarState,
  state => state.get('selectedPlaylist')
);

export const makeSelectVisibility = () => createSelector(
  sideBarState,
  state => state.get('isVisible')
);

export const makeSelectSelectedCategory = () => createSelector(
  sideBarState,
  state => state.get('selectedCategory')
);
