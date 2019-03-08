import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import MessageView from 'components/Messages/MessageView';

import reducer from './reducer';
import saga from './saga';

import {
  makeSelectMessage,
  makeSelectIsLoading,
  makeSelectMessageId,
} from './selectors';
import { getMessage } from './actions';

class MessageViewContainer extends Component {
  componentDidMount() {
    this.props.getMessage(this.props.messageId);
  }

  // TODO: view replies and parent messages....
  render() {
    return (
      <div>
        <MessageView
          message={this.props.message}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}

MessageViewContainer.propTypes = {
  getMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  messageId: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  message: makeSelectMessage(),
  messageId: makeSelectMessageId(),
});

const mapDispatchToProps = {
  getMessage,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'MessageViewContainer', reducer });
const withSaga = injectSaga({ key: 'MessageViewContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MessageViewContainer);
