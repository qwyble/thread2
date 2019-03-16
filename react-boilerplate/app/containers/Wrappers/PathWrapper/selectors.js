import { createSelector } from 'reselect';
import { makeSelectPathnameRoot } from 'containers/AppUtilities/ProfileContext/selectors';

export const makeSelectIsNotStream = () =>
  createSelector(
    makeSelectPathnameRoot(),
    path => path !== 'stream'
  );

export const makeSelectIsStream = () =>
  createSelector(
    makeSelectPathnameRoot(),
    path => path === 'stream' || path === ''
  );

export const makeSelectIsNotProfile = () =>
  createSelector(
    makeSelectPathnameRoot(),
    path => path !== 'profile'
  );
