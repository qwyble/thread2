import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'components/common/Dropdowns/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EditCategoryDropdown extends React.Component {
  handleOpenPortal = e => {
    this.props.onSetEditedCategory(e.target.value);
  };

  render() {
    return (
      <Dropdown
        options={options}
        trigger={Trigger}
        onSelect={this.handleOpenPortal}
      />
    );
  }
}

EditCategoryDropdown.propTypes = {
  onSetEditedCategory: PropTypes.func.isRequired,
};

export default EditCategoryDropdown;

const Trigger = onClick => (
  <button
    type="button"
    className="ui button"
    onClick={onClick}
    style={{ padding: '.5em', height: '100%' }}
  >
    <FontAwesomeIcon icon="ellipsis-v" />
  </button>
);

const options = [
  { key: 0, text: 'rename', value: 0 },
  { key: 1, text: 'share', value: 1 },
  { key: 2, text: 'delete', value: 2 },
];
