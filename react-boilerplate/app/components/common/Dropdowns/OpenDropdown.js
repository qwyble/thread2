import React from 'react';
import PropTypes from 'prop-types';

require('./css.css');

const OpenDropdown = props => (
  <div className={props.isOpen ? 'dropdown-menu open' : 'dropdown-menu closed'}>
    {props.options.map(option => (
      <button
        key={option.get('key')}
        name="category"
        value={option.get('value')}
        type="button"
        className="dropdown-item"
        onClick={props.onSelect}
      >
        {option.get('text')}
      </button>
    ))}
  </div>
);

OpenDropdown.propTypes = {
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default OpenDropdown;
