import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';

const LoaderWrapper = props => (
  <div>
    {props.isLoading ?
      <div><Loader active /></div>
      : <div>{props.children}</div>
    }
  </div>
);

LoaderWrapper.propTypes = {
  children: PropTypes.element,
}

export default LoaderWrapper;
