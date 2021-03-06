import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SongRow from 'components/SongsTable/SongRow';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { makeSelectSongs } from 'containers/SongsContainer/SongsContainer/selectors';
import { makeSelectNowPlayingId } from 'containers/Audio/PlaybackContainer/selectors';

import {
  selectSong,
  deselectSong,
} from 'containers/SongsContainer/SongsContainer/actions';

import {
  handlePlaying,
  handlePausing,
} from 'containers/Audio/PlaybackContainer/actions';

import { makeSelectIsLoading, makeSelectSongId } from './selectors';
import { rateSong } from './actions';

class SongRowsContainer extends Component {
  handlePlayToggle = e => {
    if (!this.props.nowPlayingId === e.target.id)
      this.props.handlePlaying(e.target.id);
    else this.props.handlePausing();
  };

  handleSongSelect = e => {
    console.log(e.target);
    if (!e.target.value) this.props.selectSong(e.target.id);
    else this.props.deselectSong(e.target.id);
  };

  render() {
    return (
      <div>
        {this.props.songs.map((song, key) => (
          <SongRow
            key={key}
            onPlay={this.props.handlePlaying}
            onPause={this.props.handlePausing}
            onRate={this.props.rateSong}
            onSongSelect={this.handleSongSelect}
            isPlaying={this.props.nowPlayingId === song.idSongs}
            selected={!!song.isSelected}
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
  handlePlaying: PropTypes.func,
  handlePausing: PropTypes.func,
  rateSong: PropTypes.func,
  songs: PropTypes.array,
  songId: PropTypes.string,
  isLoading: PropTypes.bool,
  selectSong: PropTypes.func,
  deselectSong: PropTypes.func,
  nowPlayingId: PropTypes.number,
};

const mapStateToProps = () =>
  createStructuredSelector({
    songs: makeSelectSongs(),
    songId: makeSelectSongId(),
    isLoading: makeSelectIsLoading(),
    isPlaying: makeSelectNowPlayingId(),
  });

const mapDispatchToProps = {
  selectSong,
  deselectSong,
  handlePausing,
  handlePlaying,
  rateSong,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(SongRowsContainer);
