import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SongRow from 'components/SongsTable/SongRow';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { makeSelectSongs } from 'containers/SongsContainer/SongsContainer/selectors';
import {
  makeSelectNowPlayingId,
  makeSelectIsPaused,
} from 'containers/Audio/PlaybackContainer/selectors';

import {
  selectSong,
  deselectSong,
} from 'containers/SongsContainer/SongsContainer/actions';

import {
  handlePlaying,
  handlePausing,
} from 'containers/Audio/PlaybackContainer/actions';

import reducer from './reducer';
import saga from './saga';
import { makeSelectIsLoading, makeSelectSongId } from './selectors';
import { rateSong } from './actions';

class SongRowsContainer extends Component {
  handleSongSelect = e => {
    if (e.target.checked) this.props.selectSong(parseInt(e.target.id, 10));
    else this.props.deselectSong(parseInt(e.target.id, 10));
  };

  render() {
    console.log(this.props.songs.toJS());
    return (
      <tbody style={{ display: 'block', overflow: 'scroll', height: '91%' }}>
        {this.props.songs.map((song, key) => (
          <SongRow
            key={key}
            song={song}
            onPause={this.props.handlePausing}
            onPlay={this.props.handlePlaying}
            onRate={this.props.rateSong}
            onSongSelect={this.handleSongSelect}
            isPlaying={
              !this.props.isPaused &&
              this.props.isPlaying === song.get('idSongs')
            }
            selected={!!song.get('isSelected')}
            isLoading={
              this.props.isLoading && this.props.songId === song.get('idSongs')
            }
          />
        ))}
      </tbody>
    );
  }
}

SongRowsContainer.propTypes = {
  handlePlaying: PropTypes.func.isRequired,
  handlePausing: PropTypes.func.isRequired,
  rateSong: PropTypes.func.isRequired,
  songs: PropTypes.object.isRequired,
  songId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectSong: PropTypes.func.isRequired,
  deselectSong: PropTypes.func.isRequired,
  isPaused: PropTypes.bool.isRequired,
  isPlaying: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  songs: makeSelectSongs(),
  songId: makeSelectSongId(),
  isLoading: makeSelectIsLoading(),
  isPlaying: makeSelectNowPlayingId(),
  isPaused: makeSelectIsPaused(),
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

const withReducer = injectReducer({ key: 'SongRowContainer', reducer });
const withSaga = injectSaga({ key: 'SongRowContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SongRowsContainer);
