import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';
import { connect } from 'react-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import AudioPlayer from 'components/audio/audioPlayer';

import reducer from './reducer';
import saga from './saga';

class AudioRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      percentPlayed: '0',
      duration: '0',
      currentTime: '0',
      volume: 0.5,
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    if (this.props.paused) {
      this.props.handlePlaying(this.props.nowPlaying);
      this.interval = setInterval(() => this.getCurrentTime(), 300);
      this.myRef.current.play();
    } else {
      this.props.handlePausing();
      this.myRef.current.pause();
      clearInterval(this.interval);
    }
  };

  handleVolume = e => {
    const volume = e.target.value / 100;
    this.myRef.current.volume = volume;
    this.setState({ volume });
  };

  handleSongPosition = e => {
    const percentMarker = e.target.value / 100;
    const newPosition = this.myRef.current.duration * percentMarker;
    if (newPosition) {
      this.myRef.current.fastSeek(newPosition);
    }
  };

  getMinSec = time => {
    let currentTime = Math.round(time);
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    currentTime = `${minutes}:${seconds}`;
    return currentTime;
  };

  getCurrentTime = () => {
    let currentTime = this.getMinSec(this.myRef.current.currentTime);
    let duration = this.getMinSec(this.myRef.current.duration);
    let percentPlayed = String(
      ((this.myRef.current.currentTime + 1) /
        (this.myRef.current.duration + 1)) *
        100
    );
    if (duration === 'NaN:NaN') {
      percentPlayed = '0';
      duration = '0';
      currentTime = '0';
    }

    this.setState({ percentPlayed, currentTime, duration });
  };

  render() {
    return (
      <div>
        <div className="audioContainer">
          <Audio
            myRef={this.myRef}
            URL={this.props.nowPlaying.URL}
            onEnd={this.props.handleEnd}
          />

          <Grid className="playerGrid">
            <Grid.Row>
              <SongsMenu
                songs={this.props.songs}
                onPlaying={this.props.handlePlaying}
                nowPlaying={this.props.nowPlaying}
              />
              <PlayButtons
                icon={this.props.paused ? 'play' : 'pause'}
                skipBack={this.props.handleSkipBack}
                onClick={this.handleClick}
                onEnd={this.props.handleEnd}
              />

              <DurationMeter
                currentTime={this.state.currentTime}
                duration={this.state.duration}
                percentPlayed={this.state.percentPlayed}
                onSongPosition={this.handleSongPosition}
              />

              <Volume />
            </Grid.Row>
          </Grid>
        </div>
        <AudioPlayer
          myRef={this.myRef}
          onClick={this.handleClick}
          onVolume={this.handleVolume}
          onSongPosition={this.handleSongPosition}
          volume={this.state.volume}
          duration={this.state.duration}
          currentTime={this.state.currentTime}
          percentPlayed={this.state.percentPlayed}
          onEnd={this.props.onEnd}
          songs={this.props.songs}
          URL={this.props.song.URL}
          skipBack={this.props.skipBack}
          nowPlaying={this.props.nowPlaying}
          onPlaying={this.props.onPlaying}
          _icon={this.props.paused ? 'play' : 'pause'}
        />
      </div>
    );
  }
}

export default AudioRenderer;
