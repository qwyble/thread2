import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Button, Header, Icon } from 'semantic-ui-react';
import SongAdderPortalWrapper from 'components/SongsTable/PlaylistModifiers/SongAdder/SongAdderPortalWrapper';
const SongDetails = props => (
  <div>
    <Container className="songInfoContainer">
      <Grid verticalAlign="middle" stretched textAlign="center" colums={4}>
        <Grid.Row>
          <Grid.Column width={2}>
            <Icon
              size="huge"
              name={props.playing ? 'pause' : 'play'}
              onClick={props.onPlaying}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Header>Title</Header>
            {props.song.title}
          </Grid.Column>
          <Grid.Column width={4}>
            <Header>Uploader</Header>
            {props.song.userName}
          </Grid.Column>
          <Grid.Column width={4}>
            <Header>Included in {props.song.playlists} Playlist(s)</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column stretched>
            <Header>Description</Header>
            {props.song.description}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <SongAdderPortalWrapper />
          </Grid.Column>
          <Grid.Column>
            <Button size="mini" onClick={props.onDeleteSong}>
              Delete Song(s)
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

SongDetails.propTypes = {
  song: PropTypes.object,
  onDeleteSong: PropTypes.func,
  onPlaying: PropTypes.func,
  playing: PropTypes.bool,
};

export default SongDetails;
