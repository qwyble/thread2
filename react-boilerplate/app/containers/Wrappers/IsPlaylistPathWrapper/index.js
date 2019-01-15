import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectIsPlaylist } from './selectors';

const IsPlaylistPathWrapper = props => (
  <div>{props.isPlaylist ? <div>{props.children}</div> : <div />}</div>
);

IsPlaylistPathWrapper.propTypes = {
  isPlaylist: PropTypes.bool,
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  isPlaylist: makeSelectIsPlaylist(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withRouter,
  withConnect
)(IsPlaylistPathWrapper);
