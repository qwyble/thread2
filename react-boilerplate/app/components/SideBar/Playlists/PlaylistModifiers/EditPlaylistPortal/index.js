import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, TransitionablePortal } from 'semantic-ui-react';
import DeletePlaylist from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/DeletePlaylist';
import RenamePlaylist from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/RenamePlaylist';

class EditPlaylistPortal extends Component {
  state = {
    openPortal: false,
    whichPortal: 0,
  };

  handleOpen = whichPortal => {
    this.setState({ openPortal: true, whichPortal });
  };

  handleClose = () => {
    this.setState({ openPortal: false });
  };

  handleDropdownChange = (e, d) => {
    e.preventDefault();
    const val = d.value;
    if (val === 'delete') this.handleOpen(0);
    else if (val === 'rename') this.handleOpen(1);
  };

  render() {
    const options = [
      { key: 0, text: '', value: '' },
      { key: 1, text: 'rename', value: 'rename' },
      { key: 2, text: 'share', value: 'share' },
      { key: 3, text: 'delete', value: 'delete' },
    ];

    return (
      <div>
        <Dropdown
          text=" "
          icon="ellipsis vertical"
          className="dropOverlay icon"
          options={options}
          onChange={this.handleDropdownChange}
        />
        <TransitionablePortal
          onClose={this.handleClose}
          open={this.state.openPortal}
        >
          {this.state.openPortal ? (
            <div>
              {this.state.whichPortal ? (
                <DeletePlaylist
                  id={this.props.id}
                  playlist={this.props.playlist}
                  onClosePortal={this.handleClose}
                />
              ) : (
                <RenamePlaylist
                  id={this.props.id}
                  playlist={this.props.playlist}
                  onClosePortal={this.handleClose}
                />
              )}
            </div>
          ) : (
            <div />
          )}
        </TransitionablePortal>
      </div>
    );
  }
}

EditPlaylistPortal.propTypes = {
  id: PropTypes.string,
  playlist: PropTypes.string,
};

export default EditPlaylistPortal;
