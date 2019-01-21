import React from 'react';
import PropTypes from 'prop-types';

require('./css.css');

const Loader = props => {
  console.log(props);
  return (
    <span style={{ display: 'inline-block' }}>
      <span style={{ display: 'inline-block' }}>
        {props.message ? <span>{props.message}</span> : <span />}
      </span>
      <span className="loading-indicator" />
    </span>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;
