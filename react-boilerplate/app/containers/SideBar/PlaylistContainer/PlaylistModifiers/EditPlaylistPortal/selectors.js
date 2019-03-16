import { createSelector } from 'reselect';

import { selectPlaylistState } from 'containers/SideBar/PlaylistContainer/selectors';

const makeSelectEditPlaylistPortalState = () =>
  createSelector(
    selectPlaylistState,
    substate => substate.get('editPlaylistPortal')
  );

export const makeSelectEditedPlaylist = () =>
  createSelector(
    makeSelectEditPlaylistPortalState(),
    substate => substate.get('playlist')
  );

export const makeSelectEditedPlaylistId = () =>
  createSelector(
    makeSelectEditedPlaylist(),
    playlist => playlist.get('plid')
  );

export const makeSelectEditedPlaylistName = () =>
  createSelector(
    makeSelectEditedPlaylist(),
    playlist => playlist.get('plname')
  );

export const makeSelectWhichPortal = () =>
  createSelector(
    makeSelectEditPlaylistPortalState(),
    substate => substate.get('whichPortal')
  );

export const makeSelectIsOpen = () =>
  createSelector(
    makeSelectEditedPlaylistId(),
    plid => !!plid
  );
