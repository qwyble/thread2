import { createSelector } from 'reselect';
import { selectPlaylistState } from 'containers/SideBar/PlaylistContainer/selectors';

export const makeSelectAddPlaylist = () =>
  createSelector(
    selectPlaylistState,
    state => state.get('addPlaylist')
  );

export const makeSelectAddIsLoading = () =>
  createSelector(
    makeSelectAddPlaylist,
    addPlaylist => addPlaylist.get('isLoading')
  );

export const makeSelectAddError = () =>
  createSelector(
    makeSelectAddPlaylist,
    addPlaylist => addPlaylist.get('error')
  );
