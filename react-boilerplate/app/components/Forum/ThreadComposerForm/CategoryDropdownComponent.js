import React from 'react';
import PropTypes from 'prop-types';
import SearchDropdown from 'components/common/Dropdowns/SearchDropdown';

class CategoryDropdownComponent extends React.Component {
  render() {
    return (
      <SearchDropdown
        options={this.props.categories}
        onSelect={this.props.onSelect}
        placeholder={this.props.placeholder}
      />
    );
  }
}

CategoryDropdownComponent.propTypes = {
  categories: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CategoryDropdownComponent;
