import { makeSelectUserId } from 'containers/AppUtilities/ProfileContext/selectors';
import { makeSelectThreadOwnerId } from 'containers/Forum/ThreadView/ThreadView/selectors';
import { createSelector } from 'reselect';

export const makeSelectIsThreadOwner = () =>
  createSelector(
    makeSelectUserId,
    makeSelectThreadOwnerId,
    (user, threadOwner) => user === threadOwner
  );
