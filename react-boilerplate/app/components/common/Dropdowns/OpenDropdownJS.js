import React from 'react';
import PropTypes from 'prop-types';

require('./css.css');

const OpenDropdownJS = props => (
  <div className={props.isOpen ? 'dropdown-menu open' : 'dropdown-menu closed'}>
    {props.options.map(option => (
      <button
        key={option.key}
        name="option"
        value={option.value}
        type="button"
        className="dropdown-item"
        onClick={props.onSelect}
      >
        {option.text}
      </button>
    ))}
  </div>
);

OpenDropdownJS.propTypes = {
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default OpenDropdownJS;
