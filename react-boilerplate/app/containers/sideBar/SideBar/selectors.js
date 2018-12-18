import { createSelector } from 'reselect';
import { makeSelectParams } from '../../../appUtilities/ProfileContext/selectors';


const sideBarState = state => state.get('sideBar');

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

export const makeSelectIsLoading = () => createSelector(
  sideBarState,
  state => state.get('isLoading')
);

export const makeSelectCategories = () => createSelector(
  sideBarState,
  state => state.get('categories')
);
