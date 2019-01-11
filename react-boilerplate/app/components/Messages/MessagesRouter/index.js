import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

import MessageViewContainer from 'containers/Messages/MessageViewContainer';
import MessageComposer from 'containers/Messages/MessageComposer';
import MessagesListContainer from 'containers/Messages/MessagesListContainer';
import MessagesContainer from 'containers/Messages/MessagesContainer';

const MessagesRouter = () => (
  <div>
    <MessagesContainer />

    <Segment style={{ width: '50%', margin: 'auto' }} className="messagesTable">
      <Container style={{ height: '70vh', overflowY: 'scroll' }}>
        <Switch>
          <Route path="/messages/view" component={MessageViewContainer} />
          <Route path="/messages/compose" component={MessageComposer} />
          <Route path="/messages" component={MessagesListContainer} />
        </Switch>
      </Container>
    </Segment>
  </div>
);

export default MessagesRouter;
