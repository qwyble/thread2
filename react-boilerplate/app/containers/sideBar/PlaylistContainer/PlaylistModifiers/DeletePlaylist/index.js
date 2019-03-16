import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';

import DeletePlaylistForm from 'components/SideBar/Playlists/PlaylistModifiers/DeletePlaylistForm';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import saga from './saga';
import { deletePlaylist } from './actions';
import { makeSelectIsLoading } from './selectors';
import { makeSelectEditedPlaylistName } from '../EditPlaylistPortal/selectors';

const DeletePlaylist = props => (
  <LoaderWrapper isLoading={props.isLoading}>
    <DeletePlaylistForm
      plname={props.plname}
      onDelete={props.deletePlaylist}
      onCancel={props.onClosePortal}
    />
  </LoaderWrapper>
);

DeletePlaylist.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onClosePortal: PropTypes.func.isRequired,
  deletePlaylist: PropTypes.func.isRequired,
  plname: PropTypes.string.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    plname: makeSelectEditedPlaylistName(),
  });

const mapDispatchToProps = {
  deletePlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: 'DeletePlaylist', saga });

export default compose(
  withSaga,
  withConnect
)(DeletePlaylist);
