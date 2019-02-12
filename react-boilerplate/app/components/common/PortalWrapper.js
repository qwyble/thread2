import React from 'react';
import PropTypes from 'prop-types';
import { Portal, Segment } from 'semantic-ui-react';

class PortalWrapper extends React.Component {
  triggerRef = React.createRef();

  render() {
    return (
      <span style={{ display: 'inline-block' }}>
        <Portal
          openOnTriggerClick
          closeOnTriggerClick
          trigger={this.props.trigger}
          triggerRef={this.triggerRef}
        >
          <Segment>
            {React.cloneElement(this.props.children, {
              triggerRef: this.triggerRef,
            })}
          </Segment>
        </Portal>
      </span>
    );
  }
}

PortalWrapper.propTypes = {
  trigger: PropTypes.element,
  children: PropTypes.node.isRequired,
};

export default PortalWrapper;
