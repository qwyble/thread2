import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';

const LoaderWrapper = props => (
  <div>
    {props.isLoading ? (
      <div>
        {props.dimmer ? <Dimmer inverted active /> : <div />}
        <Loader active />
      </div>
    ) : (
      <div>{props.children}</div>
    )}
  </div>
);

LoaderWrapper.propTypes = {
  children: PropTypes.element,
  isLoading: PropTypes.bool,
};

export default LoaderWrapper;
