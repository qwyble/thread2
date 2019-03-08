import { createSelector } from 'reselect';

const selectMessagesContainerState = state => state.get('MessagesContainer');

export const makeSelectMessages = () =>
  createSelector(
    selectMessagesContainerState,
    state => state.get('messages')
  );

export const makeSelectIsLoading = () =>
  createSelector(
    selectMessagesContainerState,
    state => state.get('isLoading')
  );

export const makeSelectSelectedMessages = () =>
  createSelector(
    makeSelectMessages(),
    messages => messages.filter(message => !!message.get('selected'))
  );

export const makeSelectSelectedMessageIds = () =>
  createSelector(
    makeSelectSelectedMessages(),
    messages => messages.map(message => message.get('idmessages'))
  );
