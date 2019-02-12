import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';

import RenamePlaylistForm from 'components/SideBar/Playlists/PlaylistModifiers/RenamePlaylistForm';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import { renamePlaylist } from './actions';

import { makeSelectDidRename, makeSelectIsLoading } from './selectors';

import renamePlaylistSaga from './saga';

class RenamePlaylist extends Component {
  componentDidUpdate() {
    if (this.props.didRename) this.props.onClosePortal();
  }

  handleRenamePlaylist() {
    this.props.renamePlaylist(this.props.plid, this.props.plname);
  }

  render() {
    return (
      <LoaderWrapper isLoading={this.props.isLoading}>
        <RenamePlaylistForm
          plname={this.props.plname}
          onCancel={this.props.onClosePortal}
          onRenamePlaylist={this.handleRenamePlaylist}
        />
      </LoaderWrapper>
    );
  }
}

RenamePlaylist.propTypes = {
  plid: PropTypes.string.isRequired,
  plname: PropTypes.string.isRequired,
  didRename: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClosePortal: PropTypes.func.isRequired,
  renamePlaylist: PropTypes.func.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    didRename: makeSelectDidRename(),
    isLoading: makeSelectIsLoading(),
  });

const mapDispatchToProps = {
  renamePlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({
  key: 'RenamePlaylistSaga',
  saga: renamePlaylistSaga,
});

export default compose(
  withSaga,
  withConnect
)(RenamePlaylist);
