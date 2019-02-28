import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'semantic-ui-react';

class PortalWrapper extends React.Component {
  render() {
    return (
      <Portal
        openOnTriggerClick
        closeOnTriggerClick
        trigger={this.props.trigger}
      >
        <div
          className="ui segment"
          style={{
            backgroundColor: 'rgba(0, 0, 0)',
            position: 'fixed',
            top: this.props.y,
            left: this.props.x,
          }}
        >
          {this.props.children}
        </div>
      </Portal>
    );
  }
}

PortalWrapper.propTypes = {
  trigger: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
};

export default PortalWrapper;
