import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Menu, Popup, Button, Icon } from 'semantic-ui-react';

const SongsMenu = props => (
  <div className="col-md-1 d-none d-md-block songs-menu">
    <span style={{ marginBottom: '4px' }}>
      <Popup
        trigger={<Icon name="list" style={{ marginBottom: '4px' }} />}
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
            backgroundColor: 'rgba(0,0,0, .8)',
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
              active={song.get('idSongs') === props.nowPlaying.get('idSongs')}
              onClick={() => props.onPlaying(song)}
            >
              {song.get('title')}
            </Button>
          ))}
        </Menu>
      </Popup>
    </span>
    <span style={{ verticalAlign: 'bottom' }}>
      {props.nowPlaying.get('title')}
    </span>
  </div>
);

SongsMenu.propTypes = {
  onPlaying: PropTypes.func,
  nowPlaying: PropTypes.object,
  songs: PropTypes.object,
};

export default SongsMenu;
