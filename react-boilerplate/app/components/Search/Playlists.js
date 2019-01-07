import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Playlists extends React.Component {
  render() {
    return (
      <Grid.Row>
        {this.props.playlists.map((playlist, key) => (
          <Grid.Column key={key}>
            <Link to={`/playlist/${playlist.idplaylists}`}>
              {playlist.name}
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    );
  }
}

export default Playlists;
