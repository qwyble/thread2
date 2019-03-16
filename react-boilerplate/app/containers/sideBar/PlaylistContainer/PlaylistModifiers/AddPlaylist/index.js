import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import AddPlaylistForm from 'components/SideBar/Playlists/PlaylistModifiers/AddPlaylistForm';
import saga from './saga';

import { addPlaylist } from './actions';

import { makeSelectAddIsLoading } from './selectors';

const AddPlaylist = props => (
  <AddPlaylistForm
    onAddPlaylist={props.addPlaylist}
    isLoading={props.isLoading}
  />
);

AddPlaylist.propTypes = {
  isLoading: PropTypes.bool,
  addPlaylist: PropTypes.func.isRequired,
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
