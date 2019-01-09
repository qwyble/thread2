import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button } from 'semantic-ui-react';

import PortalWrapper from 'components/common/PortalWrapper';
import SongAdder from 'containers/SongsContainer/PlaylistModifiers/SongAdder';
import { makeSelectNoneSelected } from 'containers/SongsContainer/SongsContainer/selectors';

const AddToPlaylistPortalWrapper = props => {
  const trigger = (
    <Button disabled={props.disabled} size="mini">
      Add to Playlist
    </Button>
  );
  return (
    <PortalWrapper trigger={trigger}>
      <SongAdder />
    </PortalWrapper>
  );
};

AddToPlaylistPortalWrapper.propTypes = {
  disabled: PropTypes.bool,
};

const mapStateToProps = {
  disabled: () => makeSelectNoneSelected(),
};

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(AddToPlaylistPortalWrapper);
