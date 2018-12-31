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
      <div>
        <Portal open={this.state.isOpen} trigger={this.props.trigger}>
          <div>
            <Segment>
              {React.cloneElement(this.props.children, {
                closePortal: this.closePortal,
              })}
            </Segment>
          </div>
        </Portal>
      </div>
    );
  }
}

PortalWrapper.propTypes = {
  trigger: PropTypes.element,
  children: PropTypes.element,
};

export default PortalWrapper;
