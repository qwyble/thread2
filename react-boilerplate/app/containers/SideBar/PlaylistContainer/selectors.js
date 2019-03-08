import { createSelector } from 'reselect';

export const selectPlaylistState = state => state.get('PlaylistContainer');

export const makeSelectSelectedPlaylist = () =>
  createSelector(
    selectPlaylistState,
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
    selectedPlaylist => selectedPlaylist.get('isOwner')
  );

export const makeSelectSelectedPlName = () =>
  createSelector(
    makeSelectSelectedPlaylist(),
    playlist => playlist.get('plname')
  );
