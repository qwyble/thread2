import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ComposerForm from 'components/Messages/ComposerForm';

import reducer from './reducer';
import saga from './saga';

import {
  makeSelectIsLoading,
  makeSelectSentMessage,
  makeSelectUsers,
} from './selectors';

import { getUsers, sendMessage } from './actions';

class MessageComposerContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    if (Object.keys(this.props.sentMessage).length) {
      return (
        <Redirect
          to={{
            pathname: '/message/view',
            state: { message: { ...this.props.sentMessage } },
          }}
        />
      );
    }
    return (
      <div>
        <ComposerForm
          users={this.props.users}
          isLoading={this.props.isLoading}
          onSendMessage={this.props.sendMessage}
        />
      </div>
    );
  }
}

MessageComposerContainer.propTypes = {
  isLoading: PropTypes.bool,
  sentMessage: PropTypes.object,
  users: PropTypes.array,
  getUsers: PropTypes.func,
  sendMessage: PropTypes.func,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    sentMessage: makeSelectSentMessage(),
    users: makeSelectUsers(),
  });

const mapDispatchToProps = {
  getUsers,
  sendMessage,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'MessageComposer', reducer });
const withSaga = injectSaga({ key: 'MessageComposer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MessageComposerContainer);
