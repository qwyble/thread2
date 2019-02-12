import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';

import { createStructuredSelector } from 'reselect';

import { makeSelectSelectedPlName } from 'containers/SideBar/SideBarContainer/selectors';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import saga from './saga';

import { removeSongs } from './actions';

import {
  makeSelectDidSucceed,
  makeSelectIsLoading,
  makeSelectSelectedSongsLength,
} from './selectors';

class SongRemover extends Component {
  componentDidUpdate() {
    if (this.props.didSucceed) this.props.onClosePortal();
  }

  render() {
    return (
      <LoaderWrapper isLoading={this.props.isLoading}>
        <div>
          Would you like to remove these {this.props.selectedSongsLength} songs
          from the {this.props.plname} playlist?
          <Button inverted color="blue" onClick={this.props.removeSongs}>
            yes
          </Button>
          <Button inverted color="blue" onClick={this.props.onClosePortal}>
            no
          </Button>
        </div>
      </LoaderWrapper>
    );
  }
}

SongRemover.propTypes = {
  onClosePortal: PropTypes.func.isRequired,
  selectedSongsLength: PropTypes.number,
  plname: PropTypes.string.isRequired,
  removeSongs: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  didSucceed: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  plname: makeSelectSelectedPlName(),
  selectedSongsLength: makeSelectSelectedSongsLength(),
  didSucceed: makeSelectDidSucceed(),
  isLoading: makeSelectIsLoading(),
});

const mapDispatchToProps = {
  removeSongs,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withSaga = injectSaga({ key: 'SongRemoverSaga', saga });

export default compose(
  withSaga,
  withConnect
)(SongRemover);
