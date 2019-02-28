import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
	state={


	}
  render() {
		const modalClass = !this.state.isOpen ? 'closed' : 'open"; 
    return (
			<div className={modalClass}>
      <div className="modal-background" style={this.state.style}>
        <div className="modal-content">{this.props.children}</div>
      </div>
		</div>
    );
  }
}
