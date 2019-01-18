import { createSelector } from 'reselect';

import { makeSelectUser } from '../UserContainer/selectors';

const selectProfileContext = state => state.get('ProfileContext');

export const makeSelectParams = () =>
  createSelector(
    selectProfileContext,
    state => state.get('params')
  );

export const makeSelectPathnameRoot = () =>
  createSelector(
    selectProfileContext,
    state => state.get('root')
  );

export const makeSelectProfileParam = () =>
  createSelector(
    makeSelectParams(),
    params => parseInt(params.get('profile'), 10)
  );

export const makeSelectProfile = () =>
  createSelector(
    selectProfileContext,
    profileContext => profileContext.get('profile')
  );

export const makeSelectProfileId = () =>
  createSelector(
    makeSelectProfile(),
    profile => profile.get('idUsers')
  );

export const makeSelectUserId = () =>
  createSelector(
    makeSelectUser(),
    user => user.get('idUsers')
  );

export const makeSelectIsOwner = () =>
  createSelector(
    makeSelectProfileId(),
    makeSelectUserId(),
    (profileId, userId) => {
      if (profileId === userId) return true;
      if (profileId === '') return true;
      return false;
    }
  );

export const makeSelectIsLoading = () =>
  createSelector(
    selectProfileContext,
    profileContext => profileContext.get('isLoading')
  );
