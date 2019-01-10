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

import { makeSelectMessage, makeSelectIsLoading } from './selectors';
import { getMessage } from './actions';

class MessageViewContainer extends Component {
  componentDidMount() {
    this.props.getMessage();
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
  getMessage: PropTypes.func,
  message: PropTypes.object,
  isLoading: PropTypes.bool,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    message: makeSelectMessage(),
  });

const mapDispatchToProps = {
  getMessage,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'MesssageViewContainer', reducer });
const withSaga = injectSaga({ key: 'MessageViewContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MessageViewContainer);
