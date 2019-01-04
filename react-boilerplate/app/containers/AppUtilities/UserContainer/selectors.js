import { createSelector } from 'reselect';

const selectUserContainer = state => state.get('UserContainer');

const makeSelectUser = () =>
  createSelector(
    selectUserContainer,
    userContainer => userContainer.get('user')
  );

const makeSelectIsLoggedIn = () =>
  createSelector(
    selectUserContainer,
    userContainer => userContainer.get('isLoggedIn')
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectUserContainer,
    userContainer => userContainer.get('isLoading')
  );

export { makeSelectUser, makeSelectIsLoggedIn, makeSelectIsLoading };
