import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

require('./css.css');

const Users = props => (
  <div className="container">
    <div className="row">
      {props.songs.map(song => (
        <div className="col-2 padded-col" key={song.get('idSongs')}>
          <Link to={`/song/${song.get('idSongs')}`}>
            {song.get('title')} - {song.get('userName')}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

Users.propTypes = {
  songs: PropTypes.object.isRequired,
};

export default Users;
