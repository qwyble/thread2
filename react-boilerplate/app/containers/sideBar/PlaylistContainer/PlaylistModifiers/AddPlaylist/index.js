import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import AddPlaylistForm from 'components/SideBar/Playlists/PlaylistModifiers/AddPlaylistForm';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import saga from './saga';

import { addPlaylist } from './actions';

import { makeSelectAddIsLoading } from './selectors';

const AddPlaylist = props => (
  <LoaderWrapper isLoading={props.isLoading}>
    <AddPlaylistForm onAddPlaylist={props.addPlaylist} error={props.error} />
  </LoaderWrapper>
);

AddPlaylist.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  addPlaylist: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectAddIsLoading(),
});

const mapDispatchToProps = {
  addPlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: 'AddPlaylist', saga });

export default compose(
  withSaga,
  withConnect
)(AddPlaylist);
