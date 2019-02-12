import React from 'react';
import PropTypes from 'prop-types';
require('./css.css');

const MenuMapper = props => {
  console.log(props.children.getIn([1, props.renderField]));
  if (props.as === 'button') {
    return (
      <div>
        {props.children.map((menuItem, i) => (
          <div key={i}>
            <button
              type="button"
              className="ui button menu-button"
              onClick={props.onClick}
              value={menuItem.get(props.valueField)}
            >
              {menuItem.get(props.renderField)}
            </button>
          </div>
        ))}
      </div>
    );
  }
};

MenuMapper.propTypes = {
  valueField: PropTypes.string.isRequired,
  renderField: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  as: PropTypes.string.isRequired,
};

export default MenuMapper;
