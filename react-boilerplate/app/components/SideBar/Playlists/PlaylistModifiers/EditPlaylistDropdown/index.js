import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'components/common/Dropdowns/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EditPlaylistDropdown extends React.Component {
  handleOpenPortal = e => {
    console.log(e.target.value);
    this.props.onSetEditedPlaylist(parseInt(e.target.value, 10));
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

EditPlaylistDropdown.propTypes = {
  onSetEditedPlaylist: PropTypes.func.isRequired,
};

export default EditPlaylistDropdown;

const Trigger = onClick => (
  <button
    type="button"
    className="ui button"
    onClick={onClick}
    style={{ padding: '.5em', height: '100%' }}
  >
    <FontAwesomeIcon icon="ellipsis-h" />
  </button>
);

const options = [
  { key: 0, text: 'rename', value: 0 },
  { key: 1, text: 'share', value: 1 },
  { key: 2, text: 'delete', value: 2 },
];
