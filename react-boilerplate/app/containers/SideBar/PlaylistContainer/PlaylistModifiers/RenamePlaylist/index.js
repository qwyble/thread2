import React from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';

import RenamePlaylistForm from 'components/SideBar/Playlists/PlaylistModifiers/RenamePlaylistForm';
import { makeSelectEditedPlaylistName } from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/EditPlaylistPortal/selectors';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import { renamePlaylist } from './actions';

import { makeSelectIsLoading } from './selectors';

import renamePlaylistSaga from './saga';

const RenamePlaylist = props => (
  <LoaderWrapper isLoading={props.isLoading}>
    <RenamePlaylistForm
      onCancel={props.onClosePortal}
      onRenamePlaylist={props.renamePlaylist}
      plname={props.plname}
    />
  </LoaderWrapper>
);

RenamePlaylist.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onClosePortal: PropTypes.func.isRequired,
  renamePlaylist: PropTypes.func.isRequired,
  plname: PropTypes.string.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    plname: makeSelectEditedPlaylistName(),
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
