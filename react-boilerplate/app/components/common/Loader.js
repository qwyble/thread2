import React from 'react';
import PropTypes from 'prop-types';

require('./css.css');

const Loader = props => {
  console.log(props);
  return (
    <span className="loader-span">
      {props.message ? (
        <span className="loader-span">{props.message}</span>
      ) : (
        <span />
      )}
      <span className="loading-indicator loader-span" />
    </span>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;
