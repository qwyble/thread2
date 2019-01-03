import { createSelector } from 'reselect';

import { selectPlaylistState } from 'containers/SideBar/PlaylistContainer/selectors';

export const makeSelectRenamePlaylistState = () =>
  createSelector(
    selectPlaylistState,
    state => state.get('renamePlaylist')
  );

export const makeSelectIsLoading = () =>
  createSelector(
    makeSelectRenamePlaylistState,
    renamePlaylist => renamePlaylist.get('isLoading')
  );

export const makeSelectDidRename = () =>
  createSelector(
    makeSelectRenamePlaylistState,
    state => state.get('didRename')
  );

export const makeSelectError = () =>
  createSelector(
    makeSelectRenamePlaylistState,
    state => state.get('error')
  );
