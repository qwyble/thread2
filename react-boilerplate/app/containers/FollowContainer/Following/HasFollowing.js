import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const HasFollowing = props => (
  <div>
    {props.following.size ? (
      <div>{props.children}</div>
    ) : (
      <div>
        <div style={{ marginTop: '20vh' }}>
          <Header>you are not following anyone.</Header>
        </div>
      </div>
    )}
  </div>
);

HasFollowing.propTypes = {
  children: PropTypes.node,
  following: PropTypes.object,
};

export default HasFollowing;
