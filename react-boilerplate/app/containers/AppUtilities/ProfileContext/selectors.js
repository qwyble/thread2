import { createSelector } from 'reselect';

import { makeSelectUser } from '../UserContainer/selectors';

const selectProfileContext = state => state.get('ProfileContext');
const selectProfileContextOwnProps = (state, ownProps) => ownProps;

export const makeSelectMatch = () =>
  createSelector(
    selectProfileContextOwnProps,
    ownProps => ownProps.match
  );

export const makeSelectParams = () =>
  createSelector(
    makeSelectMatch(),
    match => match.params
  );

export const makeSelectProfileParam = () =>
  createSelector(
    makeSelectParams(),
    params => params.profile
  );

export const makeSelectProfile = () =>
  createSelector(
    selectProfileContext,
    makeSelectUser(),
    (profileContext, user) => {
      if (!profileContext.get('profile').isEmpty())
        return profileContext.get('profile');
      return user;
    }
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
