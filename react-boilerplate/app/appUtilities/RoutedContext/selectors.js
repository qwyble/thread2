import { createSelector } from 'reselect';

import { makeSelectUser } from '../UserContainer/selectors';

const selectProfileContext = state => state.get('ProfileContext');

export const makeSelectProfile = () => createSelector(
  selectProfileContext,
  profileContext => profileContext.get('profile')
)

export const makeSelectUserId = () => createSelector(
  makeSelectUser,
  user => user.get('idUsers')
)

export const makeSelectIsOwner = () => createSelector(
  makeSelectProfile,
  makeSelectUserId,
  (profileId, userId) => {
    if (profileId === userId) return true;
    if (profileId === '') return true;
    return false;
  }
)
