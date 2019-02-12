import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
require('./css.css');

class Playlists extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.playlists.map((playlist, key) => (
            <div className="col-2 padded-col" key={key}>
              <Link to={`/playlist/${playlist.get('idplaylists')}`}>
                {playlist.get('name')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Playlists;
