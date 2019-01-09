import React from 'react';
import PropTypes from 'prop-types';

import { Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

const ThreadView = props => (
  <div>
    <Segment>
      <LoaderWrapper isLoading={props.isLoading} />
      {props.thread.Subject}

      <div>
        <Link to={`/profile/${props.thread.UserId}`}>
          {props.thread.userName}
        </Link>
      </div>
    </Segment>

    <Segment>
      <pre>{props.thread.Body}</pre>
    </Segment>
  </div>
);

ThreadView.propTypes = {
  thread: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ThreadView;
