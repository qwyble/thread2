import { createSelector } from 'reselect';
import { makeSelectSelectedPlaylist } from 'containers/SideBar/SideBarContainer/selectors';

export const selectPublicityPortalState = state => state.get('PublicityPortal');

export const makeSelectIsLoading = () =>
  createSelector(
    selectPublicityPortalState,
    state => state.get('isLoading')
  );

export const makeSelectIsPublic = () =>
  createSelector(
    makeSelectSelectedPlaylist,
    playlist => playlist.get('isPublic')
  );
