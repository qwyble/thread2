import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fromJS } from 'immutable';
import OpenDropdown from './OpenDropdown';

require('./css.css');

class SearchDropdown extends Component {
  state = {
    value: '',
    options: fromJS([]),
    dropdownOpen: false,
  };

  openDropdown = () => {
    this.setState({
      dropdownOpen: true,
      options: this.props.options,
    });
  };

  closeDropdown = () => {
    setTimeout(() => {
      this.setState({ dropdownOpen: false });
    }, 150);
  };

  handleChange = e => {
    const { value } = e.target;
    const options = getOptions(value, this.props.options);
    this.setState({ value, options });
  };

  handleSelect = e => {
    this.props.onSelect(e);
    const option = getOptionById(e.target.value, this.props.options);
    this.setState({ value: option.get('text') });
  };

  render() {
    return (
      <div className="dropdown-group">
        <div>
          <SearchInput
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            value={this.state.value}
            openDropdown={this.openDropdown}
            closeDropdown={this.closeDropdown}
          />
        </div>
        <div>
          <OpenDropdown
            onSelect={this.handleSelect}
            options={this.state.options}
            isOpen={this.state.dropdownOpen}
          />
        </div>
      </div>
    );
  }
}

SearchDropdown.propTypes = {
  options: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchDropdown;

const SearchInput = props => (
  <input
    name="category-search-dropdown"
    className="ui input form-control"
    placeholder={props.placeholder}
    onChange={props.onChange}
    value={props.value}
    onFocus={props.openDropdown}
    onBlur={props.closeDropdown}
    autoComplete="off"
  />
);

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

function getOptions(value, items) {
  return items.filter(item =>
    item
      .get('text')
      .toLowerCase()
      .includes(value)
  );
}

function getOptionById(value, items) {
  return items.find(item => item.get('value').toString() === value);
}
