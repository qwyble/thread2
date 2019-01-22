import React from 'react';
import PropTypes from 'prop-types';

require('./css.css');

class DurationMeter extends React.Component {
  state = {
    percentPlayed: '0',
    currentTime: '0',
    duration: '0',
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.paused !== this.props.paused) {
      if (this.props.paused) clearInterval(this.interval);
      else this.interval = setInterval(() => this.getCurrentTime(), 300);
    }
  }

  handleSongPosition = e => {
    const percentMarker = e.target.value / 100;
    const newPosition = this.props.myRef.current.duration * percentMarker;
    if (newPosition) {
      this.props.myRef.current.currentTime = newPosition;
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
    let currentTime = this.getMinSec(this.props.myRef.current.currentTime);
    let duration = this.getMinSec(this.props.myRef.current.duration);
    let percentPlayed = String(
      ((this.props.myRef.current.currentTime + 1) /
        (this.props.myRef.current.duration + 1)) *
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
      <div className="col-md-8 d-none d-md-block duration-div">
        <span className="timer-span">
          {this.state.currentTime} / {this.state.duration}
        </span>

        <span className="song-slider-span" style={{ display: 'inline-block' }}>
          <input
            type="range"
            min="1"
            max="100"
            value={this.state.percentPlayed}
            className="songslider"
            onChange={this.handleSongPosition}
          />
        </span>
      </div>
    );
  }
}

DurationMeter.propTypes = {
  myRef: PropTypes.object,
  paused: PropTypes.bool,
};

export default DurationMeter;
