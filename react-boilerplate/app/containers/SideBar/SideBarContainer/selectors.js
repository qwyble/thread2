import { createSelector } from 'reselect';

export const sideBarState = state => state.get('SideBar');

export const makeSelectSelectedPlaylist = () =>
  createSelector(
    sideBarState,
    state => state.get('selectedPlaylist')
  );

export const makeSelectSelectedPlid = () =>
  createSelector(
    makeSelectSelectedPlaylist(),
    playlist => playlist.get('plid')
  );

export const makeSelectSelectedPlIsOwner = () =>
  createSelector(
    makeSelectSelectedPlaylist(),
    selectedPlaylist => {
      if (selectedPlaylist.size) {
        return selectedPlaylist.get('isOwner');
      }
      return false;
    }
  );

export const makeSelectSelectedPlName = () =>
  createSelector(
    makeSelectSelectedPlaylist(),
    playlist => playlist.get('plname')
  );

export const makeSelectSelectedCategory = () =>
  createSelector(
    sideBarState,
    state => state.get('selectedCategory')
  );

export const makeSelectSelectedCategoryId = () =>
  createSelector(
    makeSelectSelectedCategory(),
    cat => cat.get('catid')
  );
