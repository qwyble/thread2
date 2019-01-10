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
  children: PropTypes.element,
  alt: PropTypes.element,
  field: PropTypes.oneOf([
    PropTypes.bool,
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default PropChecker;
