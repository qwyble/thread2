import { createSelector } from 'reselect';

export const selectMessageViewContainerState = state =>
  state.get('MessageViewContainer');
export const selectMessagedViewContainerOwnProps = (state, ownProps) =>
  ownProps;

export const makeSelectIsLoading = () =>
  createSelector(
    selectMessageViewContainerState,
    state => state.get('isLoading')
  );

export const makeSelectMessage = () =>
  createSelector(
    selectMessageViewContainerState,
    selectMessagedViewContainerOwnProps,
    (state, ownProps) => ownProps.location.state.message || state.get('message')
  );

export const makeSelectMessageId = () =>
  createSelector(
    selectMessagedViewContainerOwnProps,
    ownProps =>
      ownProps.location.state.id || ownProps.location.state.message.idmessages
  );
