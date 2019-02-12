import React from 'react';
import PropTypes from 'prop-types';

import { Feed, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Event = props => (
  <div style={{ fontSize: 'small' }}>
    <Feed.Event>
      <Feed.Content>
        <Feed.User>{props.user}</Feed.User> commented in
        <div>
          <Link to={`/forum/thread/${props.threadId}`}>{props.subject}</Link>:
        </div>
        <Feed.Extra text>"{props.body.slice(0, 40)}"</Feed.Extra>
      </Feed.Content>
    </Feed.Event>
    <Divider />
  </div>
);

Event.propTypes = {
  user: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  threadId: PropTypes.number,
};

export default Event;
