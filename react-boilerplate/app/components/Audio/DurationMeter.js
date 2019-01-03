import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
class DurationMeter extends React.Component {
  state = {
    percentPlayed: '0',
    currentTime: '0',
    duration: '0',
  };

  componentDidMount() {
    this.interval = setInterval(() => this.getCurrentTime(), 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleSongPosition = e => {
    const percentMarker = e.target.value / 100;
    const newPosition = this.props.myRef.current.duration * percentMarker;
    if (newPosition) {
      this.props.myRef.current.fastSeek(newPosition);
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
      <div>
        <Grid.Column>
          {this.state.currentTime} / {this.state.duration}
        </Grid.Column>

        <Grid.Column className="playerCol" width={9}>
          <input
            type="range"
            min="1"
            max="100"
            value={this.state.percentPlayed}
            className="songslider"
            onChange={this.onSongPosition}
          />
        </Grid.Column>
      </div>
    );
  }
}

DurationMeter.propTypes = {
  myRef: PropTypes.node,
};

export default DurationMeter;
