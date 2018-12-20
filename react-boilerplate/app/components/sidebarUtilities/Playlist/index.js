import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Playlist = props => (
  <div>
    <Link to={`/playlist/${props.id}`}>
      <Button
        size="mini"
        inverted
        color="blue"
        className="playlistButton"
        value={props.id}
        ispublic={props.isPublic}
        onClick={props.onSelectPlaylist}
      >
        {props.playlist}
      </Button>
    </Link>
    {
      props.isOwner
        ? (
          <Button
            size="mini"
            floated="right"
            className="trashcan"
            inverted
            icon
            id={props.id}
            name={props.playlist}
            onClick={props.onDeleteList}
          >
            <Icon size="small" name="trash" />
          </Button>
        )
        : <div></div>
    }
  </div>
);

Playlist.propTypes = {
  id: PropTypes.string,
  isOwner: PropTypes.bool,
  isPublic: PropTypes.bool,
  playlist: PropTypes.string,
  onDeleteList: PropTypes.func,
  onSelectPlaylist: PropTypes.func,
};


export default Playlist;
