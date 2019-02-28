import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Segment, Dimmer, Button, Icon } from 'semantic-ui-react';

class ModalWrapper extends React.Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    if (this.state.isOpen) this.setState({ isOpen: false });
    else this.setState({ isOpen: true });
  };

  render() {
    return (
      <Modal
        onOpen={this.toggleOpen}
        onClose={this.toggleOpen}
        open={this.state.isOpen}
        closeOnDocumentClick
        dimmer
        trigger={this.props.trigger}
      >
        <div className="container">
          <div className="ui segment modal-content">
            {this.state.isOpen ? (
              <div>{this.props.render(this.toggleOpen)}</div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </Modal>
    );
  }
}

ModalWrapper.propTypes = {
  trigger: PropTypes.element.isRequired,
};

export default ModalWrapper;
