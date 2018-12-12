import { createSelector } from 'reselect';

const selectUserContainer = state => state.get('userContainer');

const makeSelectUser = () => createSelector(
  selectUserContainer,
  userContainer => userContainer.get('user')
);

const makeSelectIsLoggedIn = () => createSelector(
  selectUserContainer,
  userContainer => userContainer.get('isLoggedIn')
);

const makeSelectIsLoading = () => createSelector(
  selectUserContainer,
  userContainer => userContainer.get('isLoading')
);

const makeSelectErrorMsg = () => createSelector(
  selectUserContainer,
  userContainer => userContainer.get('error')
);

export {
  makeSelectUser,
  makeSelectIsLoggedIn,
  makeSelectIsLoading,
  makeSelectErrorMsg,
};
