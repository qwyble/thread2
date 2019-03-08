import React from 'react';
import PropTypes from 'prop-types';

require('./css.css');

const Loader = props => {
  console.log(props);
  return (
    <div className="loader-div">
      {props.message ? (
        <div className="loading-message">{props.message}</div>
      ) : (
        <span />
      )}
      <div className="loading-indicator " />
    </div>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;
