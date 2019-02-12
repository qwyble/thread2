import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const HasFollowers = props => (
  <div>
    {props.followers.size ? (
      <div>{props.children}</div>
    ) : (
      <div>
        <div style={{ marginTop: '20vh' }}>
          <Header>you don&#39;t have any followers.</Header>
        </div>
      </div>
    )}
  </div>
);

HasFollowers.propTypes = {
  children: PropTypes.node.isRequired,
  followers: PropTypes.object,
};

export default HasFollowers;
