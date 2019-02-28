import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
require('./css.css');

const Playlists = props => (
  <div className="container">
    <div className="row">
      {props.playlists.map(playlist => (
        <div className="col-2 padded-col" key={playlist.get('idplaylists')}>
          <Link to={`/playlist/${playlist.get('idplaylists')}`}>
            {playlist.get('name')}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

Playlists.propTypes = {
  playlists: PropTypes.object.isRequired,
};

export default Playlists;
