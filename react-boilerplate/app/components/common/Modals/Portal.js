import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ClickOutside from 'components/common/MouseTrap/ClickOutside';

require('./css.css');

const Portal = props => {
  let className = 'ui segment portal';
  className = props.isOpen ? `${className} open` : `${className} closed`;
  className = props.location ? `${className} ${props.location}` : className;
  className = props.centered ? `${className} centered` : className;

  let dimmerClassName = 'dimmer';
  dimmerClassName = props.dimmer
    ? `${dimmerClassName} dimmed`
    : dimmerClassName;
  if (props.isOpen) {
    return ReactDOM.createPortal(
      <div className={dimmerClassName}>
        <div className={className}>
          <ClickOutside handler={props.onClose}>{props.children}</ClickOutside>
        </div>
      </div>,
      document.body
    );
  }
  return <div />;
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  centered: PropTypes.bool,
  location: PropTypes.string,
};

export default Portal;
