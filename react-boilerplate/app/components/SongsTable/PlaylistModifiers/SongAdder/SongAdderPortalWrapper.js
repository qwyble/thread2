import React from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button } from 'semantic-ui-react';

import PortalWrapper from 'components/common/PortalWrapper';
import SongAdder from 'containers/SongsContainer/PlaylistModifiers/SongAdder';
import { makeSelectNoneSelected } from 'containers/SongsContainer/SongsContainer/selectors';

const SongAdderPortalWrapper = props => {
  const trigger = (
    <Button disabled={props.disabled} inverted color="blue" size="mini">
      Add to Playlist
    </Button>
  );
  return (
    <PortalWrapper trigger={trigger} x="50" y="50">
      <SongAdder />
    </PortalWrapper>
  );
};

SongAdderPortalWrapper.propTypes = {
  disabled: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  disabled: makeSelectNoneSelected(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(SongAdderPortalWrapper);
