import { createSelector } from 'reselect';
import { makeSelectPathname } from 'containers/SongsContainer/SongsContainer/selectors';

export const makeSelectIsPlaylist = () =>
  createSelector(
    makeSelectPathname,
    path => path.includes('playlist')
  );
