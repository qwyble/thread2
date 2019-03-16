import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import EditPlaylistDropdown from 'components/SideBar/Playlists/PlaylistModifiers/EditPlaylistDropdown';
import IsOwner from 'containers/Wrappers/IsOwner';

require('./css.css');

class Playlist extends React.Component {
  handleSetEditedPlaylist = whichPortal => {
    this.props.onSetEditedPlaylist(this.props.playlist, whichPortal);
  };

  handleSetSelectedPlaylist = () => {
    this.props.onSetPlaylist(this.props.playlist);
  };

  render() {
    return (
      <Menu.Item className="playlistTab">
        <IsOwner>
          <EditPlaylistDropdown
            onSetEditedPlaylist={this.handleSetEditedPlaylist}
          />
        </IsOwner>
        <Link
          to={`/playlist/${this.props.playlist.get('plid')}`}
          style={{ flexGrow: '1' }}
        >
          <button
            type="button"
            className="playlistButton"
            onClick={this.handleSetSelectedPlaylist}
          >
            {this.props.playlist.get('plname')}
          </button>
        </Link>
      </Menu.Item>
    );
  }
}

Playlist.propTypes = {
  playlist: PropTypes.object.isRequired,
  onSetPlaylist: PropTypes.func.isRequired,
  onSetEditedPlaylist: PropTypes.func.isRequired,
};

export default Playlist;
