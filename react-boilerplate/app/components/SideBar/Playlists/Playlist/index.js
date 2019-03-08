import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import EditPlaylistPortal from 'components/SideBar/Playlists/PlaylistModifiers/EditPlaylistPortal';
import IsSideBarOwner from 'containers/Wrappers/IsSideBarOwner';

require('./css.css');

const Playlist = props => (
  <Menu.Item className="playlistTab">
    <IsSideBarOwner>
      <EditPlaylistPortal
        id={props.playlist.get('plid')}
        playlist={props.playlist.get('plname')}
      />
    </IsSideBarOwner>
    <Link
      to={`/playlist/${props.playlist.get('plid')}`}
      style={{ flexGrow: '1' }}
    >
      <button
        type="button"
        className="playlistButton"
        id={props.playlist.get('plid')}
        onClick={props.onSelectPlaylist}
      >
        {props.playlist.get('plname')}
      </button>
    </Link>
  </Menu.Item>
);

Playlist.propTypes = {
  playlist: PropTypes.object.isRequired,
  onSelectPlaylist: PropTypes.func,
};

export default Playlist;
