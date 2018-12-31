import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SongRow from 'components/SongsTable/SongRow';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  makeSelectSelectedSongs,
  makeSelectSongs,
} from 'containers/SongsContainer/SongsContainer/selectors';
import { makeSelectIsPlaying } from 'containers/Audio/PlaybackContainer/selectors';
import { makeSelectIsLoading, makeSelectSongId } from './selectors';

import {
  selectSong,
  deselectSong,
} from 'containers/SongsContainer/SongsContainer/actions';

import { play, pause } from 'containers/Audio/PlaybackContainer/actions';
import Error from 'components/common/Error';

class SongRowsContainer extends Component {
  handlePlayToggle = e => {
    if (!this.props.isPlaying === e.target.id) this.props.play(e.target.id);
    else this.props.pause();
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
        <Error error={this.props.error} />
        {this.props.songs.map((song, key) => (
          <SongRow
            key={key}
            onPlay={this.props.play}
            onPause={this.props.pause}
            onRate={this.props.rateSong}
            onSongSelect={this.handleSongSelect}
            isPlaying={this.props.isPlaying === song.idSongs}
            selected={this.props.selectedSongs.includes(song.idSongs)}
            isLoading={
              this.props.isLoading && this.props.songId === song.idSongs
            }
          />
        ))}
      </div>
    );
  }
}

SongRowsContainer.propTypes = {
  play: PropTypes.func,
  songs: PropTypes.array,
  pause: PropTypes.func,
  songId: PropTypes.string,
  isLoading: PropTypes.bool,
  selectSong: PropTypes.func,
  isPlaying: PropTypes.string,
  deselectSong: PropTypes.func,
  selectedSongs: PropTypes.array,
};

const mapStateToProps = () =>
  createStructuredSelector({
    songs: () => makeSelectSongs(),
    songId: () => makeSelectSongId(),
    isLoading: () => makeSelectIsLoading(),
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
