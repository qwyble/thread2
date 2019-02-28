import React from 'react';
import PropTypes from 'prop-types';

import { Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ThreadView = ({ thread }) => (
  <div>
    <Segment>
      {thread.get('Subject')}
      <div>
        <Link to={`/profile/${thread.get('UserId')}`}>
          {thread.get('userName')}
        </Link>
      </div>
    </Segment>

    <Segment>
      <pre>{thread.get('Body')}</pre>
    </Segment>
  </div>
);

ThreadView.propTypes = {
  thread: PropTypes.object.isRequired,
};

export default ThreadView;
