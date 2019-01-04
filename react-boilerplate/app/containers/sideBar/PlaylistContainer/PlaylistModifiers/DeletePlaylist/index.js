import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';

import DeletePlaylistForm from 'components/SideBar/Playlists/PlaylistModifiers/DeletePlaylistForm';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import { deletePlaylist } from './actions';
import { makeSelectIsLoading, makeSelectDidDelete } from './selectors';

class DeletePlaylist extends Component {
  componentDidUpdate() {
    if (this.props.didDelete) this.props.onClosePortal();
  }

  handleDelete() {
    this.props.deletePlaylist(this.props.id);
  }

  render() {
    return (
      <LoaderWrapper isLoading={this.props.isLoading}>
        <DeletePlaylistForm
          plname={this.props.plname}
          onDelete={this.handleDelete}
          onCancel={this.props.onClosePortal}
        />
      </LoaderWrapper>
    );
  }
}

DeletePlaylist.propTypes = {
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  didDelete: PropTypes.bool,
  onClosePortal: PropTypes.func,
  deletePlaylist: PropTypes.func,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    didDelete: makeSelectDidDelete(),
  });

const mapDispatchToProps = {
  deletePlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: DeletePlaylist, saga });

export default compose(
  withSaga,
  withConnect
)(DeletePlaylist);
