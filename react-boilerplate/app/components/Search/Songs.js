import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
require('./css.css');

class Users extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.songs.map((song, key) => (
            <div className="col-2 padded-col">
              <Link to={`/song/${song.get('idSongs')}`}>
                {song.get('title')} - {song.get('userName')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
