import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import EditPlaylistPortal from 'components/SideBar/Playlists/PlaylistModifiers/EditPlaylistPortal';
import IsSideBarOwner from 'containers/Wrappers/IsSideBarOwner';

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
    <IsSideBarOwner>
      <EditPlaylistPortal id={props.id} playlist={props.playlist} />
    </IsSideBarOwner>
  </div>
);

Playlist.propTypes = {
  id: PropTypes.string.isRequired,
  playlist: PropTypes.string.isRequired,
  onSelectPlaylist: PropTypes.func,
};

export default Playlist;
