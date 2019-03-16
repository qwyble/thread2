import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickOutside extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.handler();
    }
  };

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

ClickOutside.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ClickOutside;
