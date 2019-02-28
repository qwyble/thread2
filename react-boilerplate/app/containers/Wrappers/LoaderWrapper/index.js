import React from 'react';
import PropTypes from 'prop-types';
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
  children: PropTypes.node,
  isLoading: PropTypes.bool.isRequired,
};

export default LoaderWrapper;
