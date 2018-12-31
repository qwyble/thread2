import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import EditPlaylistPortal from 'components/SideBar/Playlists/PlaylistModifiers/EditPlaylistPortal';
import IsOwner from 'containers/Wrappers/IsOwner';

const Playlist = props => (
  <div>
    <Link to={`/playlist/${props.id}`}>
      <Button
        inverted
        size="mini"
        color="blue"
        className="playlistButton"
        id={props.id}
        playlist={props.playlist}
        onClick={props.onSelectPlaylist}
      >
        {props.playlist}
      </Button>
    </Link>
    <IsOwner>
      <EditPlaylistPortal id={props.id} playlist={props.playlist} />
    </IsOwner>
  </div>
);

Playlist.propTypes = {
  id: PropTypes.string,
  playlist: PropTypes.string,
  onSelectPlaylist: PropTypes.func,
};

export default Playlist;
