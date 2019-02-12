import React from 'react';
import PropTypes from 'prop-types';

import { Container, Divider } from 'semantic-ui-react';

import PropChecker from 'components/common/Conditional/PropChecker';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import ConditionalBasicClosed from 'components/common/Conditional/ConditionalBasicClosed';

import MessageComposer from 'containers/Messages/MessageComposer';

const MessageView = props => {
  const buttonProps = { icon: 'reply' };
  return (
    <Container>
      <LoaderWrapper isLoading={props.isLoading}>
        <PropChecker field={props.message}>
          <div style={{ float: 'right' }}>{props.message.date}</div>
          From: {props.message.senderName}
          <Divider />
          Subject: {props.message.subject}
          <Divider />
          {props.message.text}
          <Divider />
          <ConditionalBasicClosed buttonProps={buttonProps}>
            <MessageComposer recipient={props.message.sender} />
          </ConditionalBasicClosed>
        </PropChecker>
      </LoaderWrapper>
    </Container>
  );
};

MessageView.propTypes = {
  message: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
};

export default MessageView;
