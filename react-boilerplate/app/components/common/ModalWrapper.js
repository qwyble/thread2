import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Segment, Dimmer } from 'semantic-ui-react';

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
      <div>
        <Modal
          className="uploadModal"
          open={this.state.isOpen}
          trigger={this.props.trigger}
          {...this.props}
        >
          <Dimmer.Dimmable as={Segment}>
            <div>
              {this.state.isOpen ? (
                <Segment>
                  {React.cloneElement(this.props.children, {
                    onCloseModal: this.toggleOpen,
                  })}
                </Segment>
              ) : (
                <div />
              )}
            </div>
          </Dimmer.Dimmable>
        </Modal>
      </div>
    );
  }
}

ModalWrapper.propTypes = {
  trigger: PropTypes.element,
  children: PropTypes.node.isRequired,
};

export default ModalWrapper;
