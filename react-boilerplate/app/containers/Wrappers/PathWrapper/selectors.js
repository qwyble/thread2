import { createSelector } from 'reselect';
import { makeSelectPathname } from 'containers/SongsContainer/SongsContainer/selectors';

export const makeSelectIsNotStream = () =>
  createSelector(
    makeSelectPathname,
    path => path.includes('profile') || path.includes('playlist')
  );
