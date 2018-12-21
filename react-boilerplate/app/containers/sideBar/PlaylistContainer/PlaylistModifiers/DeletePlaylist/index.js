import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';

import DeletePlaylistForm from 'components/SideBar/Playlists/PlaylistModifiers/DeletePlaylistForm';

import { deletePlaylist } from './actions';
import { makeSelectIsLoading, makeSelectDidDelete, makeSelectError } from './selectors';


class DeletePlaylist extends Component {

  componentDidUpdate() {
    if(this.props.didDelete) this.props.onClosePortal();
  }

  handleDelete() {
    this.props.deletePlaylist(this.props.id);
  }

  handleCancel() {
    this.props.onClosePortal();
  }

  render() {
    return (
      <DeletePlaylistForm
        onCancel={this.handleCancel}
        onDelete={this.handleDelete}
        playlist={this.props.playlist}
        isLoading={this.props.isLoading}
      />
    );
  }
}

DeletePlaylist.propTypes = {
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  didDelete: PropTypes.bool,
  playlist: PropTypes.string,
  onClosePortal: PropTypes.func,
  deletePlaylist: PropTypes.func,
}

const mapStateToProps = () => createStructuredSelector({
  isLoading: () => makeSelectIsLoading(),
  didDelete: () => makeSelectDidDelete(),
  error: () => makeSelectError(),
});

const mapDispatchToProps = {
  deletePlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: DeletePlaylist, saga });

export default compose(
  withSaga,
  withConnect,
)(DeletePlaylist);
