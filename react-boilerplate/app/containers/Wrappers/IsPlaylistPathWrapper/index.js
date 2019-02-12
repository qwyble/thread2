import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectIsPlaylist } from './selectors';

const IsPlaylistPathWrapper = props => (
  <span>{props.isPlaylist ? <span>{props.children}</span> : <span />}</span>
);

IsPlaylistPathWrapper.propTypes = {
  isPlaylist: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isPlaylist: makeSelectIsPlaylist(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(IsPlaylistPathWrapper);
