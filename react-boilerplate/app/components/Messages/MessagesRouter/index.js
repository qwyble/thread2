import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import MessageViewContainer from 'containers/Messages/MessageViewContainer';
import MessageComposer from 'containers/Messages/MessageComposer';
import MessagesContainer from 'containers/Messages/MessagesContainer';
import MessagesSideBar from 'components/Messages/MessagesSideBar';

const MessagesRouter = () => (
  <div>
    <MessagesSideBar />

    <Segment style={{ width: '50%', margin: 'auto' }} className="messagesTable">
      <Container style={{ height: '70vh', overflowY: 'scroll' }}>
        <Route path="/messages/view" component={MessageViewContainer} />

        <Route path="/messages/compose" component={MessageComposer} />

        <Route exact path="/messages" component={MessagesContainer} />
      </Container>
    </Segment>
  </div>
);

export default MessagesRouter;
