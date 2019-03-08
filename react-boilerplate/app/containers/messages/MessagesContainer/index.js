import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import MessagesSideBar from 'components/Messages/MessagesSideBar';

import reducer from './reducer';
import saga from './saga';

import { getMessages, deleteMessages } from './actions';

class MessagesContainer extends React.Component {
  componentDidMount() {
    if (window.location.pathname !== '/messages/sent') this.handleGetInbox();
    else this.handleGetSent();
  }

  handleGetInbox = () => {
    this.props.getMessages('inbox');
  };

  handleGetSent = () => {
    this.props.getMessages('sent');
  };

  render() {
    return (
      <MessagesSideBar
        onGetInbox={this.handleGetInbox}
        onGetSent={this.handleGetSent}
        onDelete={this.props.deleteMessages}
      />
    );
  }
}

MessagesContainer.propTypes = {
  getMessages: PropTypes.func,
  match: PropTypes.object,
  deleteMessages: PropTypes.func,
};

const mapDispatchToProps = {
  getMessages,
  deleteMessages,
};

const withConnect = connect(
  null,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'MessagesContainer', reducer });
const withSaga = injectSaga({ key: 'MessagesContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MessagesContainer);
