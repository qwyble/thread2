import React from 'react';
import PropTypes from 'prop-types';

import LinkWrapper from 'containers/Wrappers/LinkWrapper';
require('./css.css');

const MenuMapper = props => {
  if (props.as === 'button') {
    return (
      <div>
        {props.children.map((menuItem, i) => (
          <div key={i}>
            <LinkWrapper isLink={props.link} to={props.to}>
              <button
                type="button"
                className="ui button menu-button"
                onClick={props.onClick}
                value={menuItem.get(props.valueField)}
              >
                {menuItem.get(props.renderField)}
              </button>
            </LinkWrapper>
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
