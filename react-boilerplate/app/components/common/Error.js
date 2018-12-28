import React from 'react';
import PropTypes from 'prop-types';

const Error = props => (
  <div>{props.error ? <div>{props.error}</div> : <div />}</div>
);

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
