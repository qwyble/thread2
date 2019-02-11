import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Users extends React.Component {
  render() {
    return (
      <Grid.Row>
        {this.props.songs.map((song, key) => (
          <Grid.Column key={key}>
            <Link to={`/song/${song.get('idSongs')}`}>
              {song.get('title')} - {song.get('userName')}
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    );
  }
}

export default Users;
