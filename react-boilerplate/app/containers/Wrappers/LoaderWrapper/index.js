import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer } from 'semantic-ui-react';
import Loader from 'components/common/Loader';

const LoaderWrapper = props => (
  <span>
    {props.isLoading ? (
      <span style={{ textAlign: 'center', width: '100%', height: '100%' }}>
        <Loader />
      </span>
    ) : (
      <span>{props.children}</span>
    )}
  </span>
);

LoaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  dimmer: PropTypes.bool,
};

export default LoaderWrapper;
