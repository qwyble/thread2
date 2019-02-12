import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

class RecipientDropdown extends React.Component {
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
        options={this.props.options}
        loading={this.props.isLoading}
        onChange={this.onDropdownChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}
RecipientDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
};

export default RecipientDropdown;
