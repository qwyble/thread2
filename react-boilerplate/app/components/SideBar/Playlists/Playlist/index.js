import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import EditPlaylist from 'containers/sideBar/PlaylistContainer/EditPlaylist';
import IsOwner from 'containers/Wrappers/IsOwner';

const Playlist = props => (
  <div>
    <Link to={`/playlist/${props.id}`}>
      <Button
        inverted
        size="mini"
        color="blue"
        className="playlistButton"
        value={props.id}
        onClick={props.onSelectPlaylist}
      >
        {props.playlist}
      </Button>
    </Link>
    <IsOwner>
      <EditPlaylist id={props.id} playlist={props.playlist} />
    </IsOwner>
  </div>
);

Playlist.propTypes = {
  id: PropTypes.string,
  playlist: PropTypes.string,
  onSelectPlaylist: PropTypes.func,
};


export default Playlist;