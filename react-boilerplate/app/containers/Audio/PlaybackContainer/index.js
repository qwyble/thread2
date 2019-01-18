import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';
import { connect } from 'react-redux';

import injectSaga from 'utils/injectSaga';

import DurationMeter from 'components/Audio/DurationMeter';
import PlayButtons from 'components/Audio/PlayButtons';
import SongsMenu from 'components/Audio/SongsMenu';
import Volume from 'components/Audio/Volume';
import Audio from 'components/Audio/Audio';

import { makeSelectSongs } from 'containers/SongsContainer/SongsContainer/selectors';

import {
  handleEnd,
  handlePlaying,
  handlePausing,
  handleSkipBack,
} from './actions';

import saga from './saga';

import { makeSelectIsPaused, makeSelectNowPlaying } from './selectors';
require('./css.css');

class PlaybackContainer extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleClick = () => {
    if (this.props.paused) {
      this.props.handlePlaying(this.props.nowPlaying);
      this.myRef.current.play();
    } else {
      this.props.handlePausing();
      this.myRef.current.pause();
    }
  };

  render() {
    return (
      <div className="audioContainer">
        <Audio
          myRef={this.myRef}
          URL={this.props.nowPlaying.URL}
          onEnd={this.props.handleEnd}
        />

        <div className="container-fluid">
          <div className="row">
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

            {!this.props.paused ? (
              <DurationMeter myRef={this.myRef} />
            ) : (
              <div />
            )}

            <Volume myRef={this.myRef} />
          </div>
        </div>
      </div>
    );
  }
}

PlaybackContainer.propTypes = {
  paused: PropTypes.bool,
  handleEnd: PropTypes.func,
  handleSkipBack: PropTypes.func,
  handlePausing: PropTypes.func,
  handlePlaying: PropTypes.func,
  nowPlaying: PropTypes.object,
  songs: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  nowPlaying: makeSelectNowPlaying(),
  paused: makeSelectIsPaused(),
  songs: makeSelectSongs(),
});

const mapDispatchToProps = {
  handleEnd,
  handlePlaying,
  handlePausing,
  handleSkipBack,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: 'PlaybackContainer', saga });

export default compose(
  withSaga,
  withConnect
)(PlaybackContainer);
