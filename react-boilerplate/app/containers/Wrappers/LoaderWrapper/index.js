import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/common/Loader';

const LoaderWrapper = props => {
  if (props.isLoading) {
    return <Loader message={props.message} />;
  }
  return <span>{props.children}</span>;
};

LoaderWrapper.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

export default LoaderWrapper;
