import { createSelector } from 'reselect';

import { selectPlaylistState } from 'containers/SideBar/PlaylistContainer/selectors';

export const makeSelectDeletePlaylistState = () =>
  createSelector(
    selectPlaylistState,
    state => state.get('deletePlaylist')
  );

export const makeSelectIsLoading = () =>
  createSelector(
    makeSelectDeletePlaylistState(),
    deletePlaylist => deletePlaylist.get('isLoading')
  );
