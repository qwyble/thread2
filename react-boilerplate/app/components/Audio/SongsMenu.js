import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Menu, Popup, Button, Icon } from 'semantic-ui-react';

const SongsMenu = props => (
  <div>
    <Grid.Column width={1}>
      <div style={{}}>
        <Popup
          trigger={<Icon name="list" />}
          inverted
          hoverable
          style={{
            backgroundColor: 'rgba(255,255,255, .05)',
          }}
        >
          <Menu
            vertical
            size="mini"
            compact
            inverted
            style={{
              backgroundColor: 'rgba(0,0,0, .6)',
              overflowY: 'scroll',
              height: '200px',
            }}
          >
            {props.songs.map((song, i) => (
              <Button
                key={i}
                size="mini"
                fluid
                inverted
                color="blue"
                active={song.idSongs === props.nowPlaying.idSongs}
                onClick={() => props.onPlaying(song)}
              >
                {song.title}
              </Button>
            ))}
          </Menu>
        </Popup>
        {props.nowPlaying.title}
      </div>
    </Grid.Column>
  </div>
);

SongsMenu.propTypes = {
  onPlaying: PropTypes.func,
  nowPlaying: PropTypes.object,
  songs: PropTypes.array,
};

export default SongsMenu;
