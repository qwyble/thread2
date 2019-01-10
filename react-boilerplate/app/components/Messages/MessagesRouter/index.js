import React from 'react';
import PropTypes from 'prop-types';

const Router = props => (
  <div>
    <MessagesSideBar />

    <Segment style={{ width: '50%', margin: 'auto' }} className="messagesTable">
      <Container style={{ height: '70vh', overflowY: 'scroll' }}>
        <Route path="/messages/view" component={ViewMessage} />

        <Route path="/messages/compose" component={Composer} />

        <Route exact path="/messages" component={MessagesContainer} />
      </Container>
    </Segment>
  </div>
);

Router.propTypes = {};

export default Router;
