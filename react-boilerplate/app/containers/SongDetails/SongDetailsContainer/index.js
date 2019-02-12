import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import SongDetails from 'components/SongDetails';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import {
  handlePausing,
  handlePlaying,
} from 'containers/Audio/PlaybackContainer/actions';
import { makeSelectIsPaused } from 'containers/Audio/PlaybackContainer/selectors';

import reducer from './reducer';
import saga from './saga';

import {
  makeSelectSong,
  makeSelectIsLoading,
  makeSelectIsPlaying,
  makeSelectDidSucceed,
} from './selectors';
import { deleteSong, getSong } from './actions';

class SongDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.getSong(this.props.match.params.song);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.song !== prevProps.match.params.song) {
      this.props.getSong(this.props.match.params.song);
    }
  }

  handlePlaying = () => {
    if (this.props.isPaused) this.props.handlePlaying(this.props.song);
    else this.props.handlePausing();
  };

  render() {
    if (this.props.didSucceed) return <Redirect to="/stream" />;
    return (
      <div>
        <LoaderWrapper isLoading={this.props.isLoading}>
          <SongDetails
            song={this.props.song}
            onPlaying={this.handlePlaying}
            playing={this.props.isPlaying}
            onDeleteSong={this.props.deleteSong}
          />
        </LoaderWrapper>
      </div>
    );
  }
}

SongDetailsContainer.propTypes = {
  song: PropTypes.object.isRequired,
  handlePausing: PropTypes.func.isRequired,
  handlePlaying: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  isPaused: PropTypes.bool,
  match: PropTypes.object.isRequired,
  deleteSong: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  getSong: PropTypes.func.isRequired,
  didSucceed: PropTypes.bool,
};

const mapStateToProps = () =>
  createStructuredSelector({
    song: makeSelectSong(),
    isLoading: makeSelectIsLoading(),
    isPlaying: makeSelectIsPlaying(),
    isPaused: makeSelectIsPaused(),
    didSucceed: makeSelectDidSucceed(),
  });

const mapDispatchToProps = {
  deleteSong,
  getSong,
  handlePausing,
  handlePlaying,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'SongDetailsContainer', reducer });
const withSaga = injectSaga({ key: 'SongDetailsContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SongDetailsContainer);
