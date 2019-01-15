import { createSelector } from 'reselect';

const selectPathWrapperOwnProps = (state, ownProps) => ownProps;

export const makeSelectPathname = () =>
  createSelector(
    selectPathWrapperOwnProps,
    ownProps => ownProps.location.pathname.split('/')[1]
  );

export const makeSelectIsNotStream = () =>
  createSelector(
    makeSelectPathname(),
    path => path === 'profile' || path === 'playlist'
  );

export const makeSelectIsStream = () =>
  createSelector(
    makeSelectPathname(),
    path => path === 'stream' || path === ''
  );
