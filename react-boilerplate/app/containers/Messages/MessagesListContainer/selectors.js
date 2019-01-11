import { createSelector } from 'reselect';

const selectMessagesListContainerOwnProps = (state, ownProps) => ownProps;

export const makeSelectIsInbox = () =>
  createSelector(
    selectMessagesListContainerOwnProps,
    props => props.location.pathname === '/messages/inbox'
  );
