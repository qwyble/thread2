import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

class CategoryDropdownComponent extends React.Component {
  onDropdownChange = (e, d) => {
    this.props.onChange(d);
  };

  render() {
    return (
      <Dropdown
        fluid
        search
        selection
        name={this.props.name}
        value={this.props.value}
        options={this.props.categories}
        onChange={this.onDropdownChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}

CategoryDropdownComponent.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  categories: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default CategoryDropdownComponent;
