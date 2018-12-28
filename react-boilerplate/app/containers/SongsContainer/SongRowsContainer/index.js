import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SongRow from 'components/SongsTable/SongRow';
import {
  makeSelectSelectedSongs,
  makeSelectSongs,
} from 'containers/SongsContainer/SongsContainer/selectors';
import {
  makeSelectPaused,
  makeSelectIsPlaying,
} from 'containers/Audio/PlaybackContainer/selectors';
import {
  selectSong,
  deselectSong,
} from 'containers/SongsContainer/SongsContainer/actions';
import { play, pause } from 'containers/Audio/PlaybackContainer/actions';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { compose } from 'redux';

class SongRowsContainer extends Component {
  handlePlay = song => {
    this.props.play(song);
  };

  handleSongSelect = e => {
    const idSongs = e.target.id;
    if (!this.props.selectedSongs.includes(idSongs))
      this.props.selectSong(e.target.id);
    else this.props.deselectSong(e.target.id);
  };

  render() {
    return (
      <div>
        {this.props.songs.map((song, key) => (
          <SongRow
            key={key}
            onPlay={this.handlePlay}
            onSongSelect={this.handleSongSelect}
            isPlaying={this.props.isPlaying === song.idSongs}
            selected={this.props.selectedSongs.includes(song.idSongs)}
            paused={this.props.paused}
            onPause={this.props.pause}
          />
        ))}
      </div>
    );
  }
}

SongRowsContainer.propTypes = {
  play: PropTypes.func,
  paused: PropTypes.bool,
  songs: PropTypes.array,
  pause: PropTypes.func,
  selectSong: PropTypes.func,
  isPlaying: PropTypes.string,
  deselectSong: PropTypes.func,
  selectedSongs: PropTypes.array,
};

const mapStateToProps = () =>
  createStructuredSelector({
    paused: () => makeSelectPaused(),
    songs: () => makeSelectSongs(),
    isPlaying: () => makeSelectIsPlaying(),
    selectedSongs: () => makeSelectSelectedSongs(),
  });

const mapDispatchToProps = {
  selectSong,
  deselectSong,
  pause,
  play,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(SongRowsContainer);
