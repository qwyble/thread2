import { createSelector } from 'reselect';
import { playlistState } from 'containers/sideBar/PlaylistContainer/selectors';


export const makeSelectAddPlaylist = () => createSelector(
  playlistState,
  state => state.get('addPlaylist')
);

export const makeSelectAddIsLoading = () => createSelector(
  makeSelectAddPlaylist,
  addPlaylist => addPlaylist.get('isLoading')
);

export const makeSelectAddError = () => createSelector(
  makeSelectAddPlaylist,
  addPlaylist => addPlaylist.get('error')
);
