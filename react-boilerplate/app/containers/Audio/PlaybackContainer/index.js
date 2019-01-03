import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';
import { connect } from 'react-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

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

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsPaused, makeSelectNowPlaying } from './selectors';

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

            {!this.props.paused ? (
              <DurationMeter myRef={this.myRef} />
            ) : (
              <div />
            )}

            <Volume myRef={this.myRef} />
          </Grid.Row>
        </Grid>
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
  songs: PropTypes.array,
};

const mapStateToProps = () =>
  createStructuredSelector({
    paused: () => makeSelectIsPaused(),
    nowPlaying: () => makeSelectNowPlaying(),
    songs: () => makeSelectSongs(),
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

const withReducer = injectReducer({ key: 'PlaybackContainer', reducer });
const withSaga = injectSaga({ key: 'PlaybackContainerSaga', saga });

export default compose(
  withSaga,
  withReducer,
  withConnect
)(PlaybackContainer);
