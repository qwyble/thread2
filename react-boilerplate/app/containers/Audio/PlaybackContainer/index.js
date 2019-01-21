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

  componentDidUpdate(prevProps) {
    console.log(this.props.paused);
    if (prevProps.paused !== this.props.paused) {
      if (this.props.paused) this.myRef.current.pause();
      else this.myRef.current.play();
    }
  }

  handleClick = () => {
    if (this.props.paused) this.props.handlePlaying(this.props.nowPlaying);
    else this.props.handlePausing();
  };

  render() {
    return (
      <div className="container-fluid audioContainer">
        <Audio
          myRef={this.myRef}
          URL={this.props.nowPlaying.get('URL')}
          onEnd={this.props.handleEnd}
        />

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

          <DurationMeter myRef={this.myRef} paused={this.props.paused} />

          <Volume myRef={this.myRef} />
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
