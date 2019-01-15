import React from 'react';
import PropTypes from 'prop-types';
import { Loader, Dimmer } from 'semantic-ui-react';

const LoaderWrapper = props => (
  <span>
    {props.isLoading ? (
      <span>
        {props.dimmer ? <Dimmer inverted active /> : <span />}
        <Loader active />
      </span>
    ) : (
      <span>{props.children}</span>
    )}
  </span>
);

LoaderWrapper.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  dimmer: PropTypes.bool,
};

export default LoaderWrapper;
