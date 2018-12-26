import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import RenamePlaylistForm from 'components/SideBar/Playlists/PlaylistModifiers';
import {
  makeSelectDidRename,
  makeSelectIsLoading,
  makeSelectError,
} from './selectors';

class RenamePlaylist extends Component {
  componentDidUpdate() {
    if (this.props.didRename) this.props.onClosePortal();
  }

  handleRenamePlaylist() {
    this.props.renamePlaylist(this.props.plid, this.props.plname);
  }

  render() {
    return (
      <RenamePlaylistForm
        error={this.props.error}
        isLoading={this.props.isLoading}
        onRenamePlaylist={this.handleRenamePlaylist}
      />
    );
  }
}

RenamePlaylist.propTypes = {
  plid: PropTypes.string,
  error: PropTypes.object,
  plname: PropTypes.string,
  didRename: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClosePortal: PropTypes.func,
  renamePlaylist: PropTypes.func,
};

const mapStateToProps = () =>
  createStructuredSelector({
    didRename: () => makeSelectDidRename(),
    isLoading: () => makeSelectIsLoading(),
    error: () => makeSelectError(),
  });

const mapDispatchToProps = {
  renamePlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default RenamePlaylist;
