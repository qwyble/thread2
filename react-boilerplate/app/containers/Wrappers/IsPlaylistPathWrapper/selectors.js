import { createSelector } from 'reselect';

const selectPathWrapperOwnProps = (state, ownProps) => ownProps;

export const makeSelectPathname = () =>
  createSelector(
    selectPathWrapperOwnProps,
    ownProps => ownProps.location.pathname.split('/')[1]
  );

export const makeSelectIsPlaylist = () =>
  createSelector(
    makeSelectPathname,
    path => path === 'playlist'
  );
