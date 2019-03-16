import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ClickOutside from 'components/common/MouseTrap/ClickOutside';

import OpenDropdownImmutable from './OpenDropdown';
import OpenDropdownJS from './OpenDropdownJS';

class Dropdown extends Component {
  state = {
    dropdownIsOpen: false,
  };

  handleClickOutside = () => {
    this.setState({ dropdownIsOpen: false });
  };

  handleToggle = () => {
    if (this.state.dropdownIsOpen) {
      this.setState({ dropdownIsOpen: false });
    } else {
      this.setState({ dropdownIsOpen: true });
    }
  };

  handleSelect = e => {
    this.props.onSelect(e);
    this.handleToggle();
  };

  render() {
    const dropdownProps = {
      onSelect: this.handleSelect,
      options: this.props.options,
      isOpen: this.state.dropdownIsOpen,
    };

    return (
      <div>
        {this.props.trigger(this.handleToggle)}
        {this.state.dropdownIsOpen && (
          <ClickOutside handler={this.handleClickOutside}>
            {this.props.options.size ? (
              <OpenDropdownImmutable {...dropdownProps} />
            ) : (
              <OpenDropdownJS {...dropdownProps} />
            )}
          </ClickOutside>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  onSelect: PropTypes.func.isRequired,
  trigger: PropTypes.func.isRequired,
};

export default Dropdown;
