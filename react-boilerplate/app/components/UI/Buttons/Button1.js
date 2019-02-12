import React from 'react';
import PropTypes from 'prop-types';

require('./css.css');

const Button1 = props => (
  <span>
    <button
      type="button"
      className="btn btn-sm btn-outline-primary button1"
      style={{ color: '', borderRadius: '.0' }}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  </span>
);

Button1.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button1;
