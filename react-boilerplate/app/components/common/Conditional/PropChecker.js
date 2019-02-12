import React from 'react';
import PropTypes from 'prop-types';

const PropChecker = props => (
  <div>
    {props.field ? (
      <div>{props.children}</div>
    ) : (
      <div>{props.alt ? <div>{props.alt}</div> : <div />}</div>
    )}
  </div>
);

PropChecker.propTypes = {
  children: PropTypes.node.isRequired,
  alt: PropTypes.element.isRequired,
  field: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.element.isRequired,
    PropTypes.string.isRequired,
    PropTypes.number,
  ]),
};

export default PropChecker;
