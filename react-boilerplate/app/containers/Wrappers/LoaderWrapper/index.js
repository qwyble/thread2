import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer } from 'semantic-ui-react';
import Loader from 'components/common/Loader';

const LoaderWrapper = props => (
  <span>
    {props.isLoading ? (
      <span>
        {props.dimmer ? <Dimmer inverted active /> : <span />}
        <Loader />
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
