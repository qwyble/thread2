import React from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { makeSelectMessages } from 'containers/Messages/MessagesContainer/selectors';
import { selectMessage } from 'containers/Messages/MessagesContainer/actions';

import MessagesList from 'components/Messages/MessageList/MessagesList';
import MessagesTableHeader from 'components/Messages/MessagesTable/MessagesTableHeader';
import MessagesTableFooter from 'components/Messages/MessagesTable/MessagesTableFooter';

import { makeSelectIsInbox } from './selectors';

const MessagesListContainer = props => (
  <div>
    <Table selectable>
      <MessagesTableHeader isInbox={props.isInbox} />
      <MessagesList
        onSelectMessage={props.selectMessage}
        messages={props.messages}
      />
      <MessagesTableFooter />
    </Table>
  </div>
);

MessagesListContainer.propTypes = {
  selectMessage: PropTypes.func,
  messages: PropTypes.array,
};

const mapStateToProps = () =>
  createStructuredSelector({
    messages: makeSelectMessages(),
    isInbox: makeSelectIsInbox(),
  });

const mapDispatchToProps = {
  selectMessage,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(MessagesListContainer);
