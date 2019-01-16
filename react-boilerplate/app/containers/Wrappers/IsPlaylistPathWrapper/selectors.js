import { createSelector } from 'reselect';
import { makeSelectPathnameRoot } from 'containers/AppUtilities/ProfileContext/selectors';

export const makeSelectIsPlaylist = () =>
  createSelector(
    makeSelectPathnameRoot(),
    path => path === 'playlist'
  );
