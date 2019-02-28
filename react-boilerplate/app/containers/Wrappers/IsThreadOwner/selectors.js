import { createSelector } from 'reselect';
import { makeSelectUserId } from 'containers/AppUtilities/ProfileContext/selectors';
import { makeSelectThreadOwnerId } from 'containers/Forum/ThreadContainer/ThreadContainer/selectors';

export const makeSelectIsThreadOwner = () =>
  createSelector(
    makeSelectUserId,
    makeSelectThreadOwnerId,
    (user, threadOwner) => user === threadOwner
  );
