import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react';

const LoaderWrapper = props => (
  <div>
    {props.isLoading ?
      <div><Loader active /></div>
      : <div>{props.children}</div>
    }
  </div>
);

export default LoaderWrapper;
