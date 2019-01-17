import React from 'react';
import PropTypes from 'prop-types';
import { Portal, Segment } from 'semantic-ui-react';

class PortalWrapper extends React.Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    if (this.state.isOpen) this.setState({ isOpen: false });
    else this.setState({ isOpen: true });
  };

  render() {
    return (
      <span style={{ display: 'inline-block' }}>
        <Portal open={this.state.isOpen} trigger={this.props.trigger}>
          {this.state.isOpen ? (
            <Segment>
              {React.cloneElement(this.props.children, {
                closePortal: this.toggleOpen,
              })}
            </Segment>
          ) : (
            <div />
          )}
        </Portal>
      </span>
    );
  }
}

PortalWrapper.propTypes = {
  trigger: PropTypes.element,
  children: PropTypes.node,
};

export default PortalWrapper;
