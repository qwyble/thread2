import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsNotStream } from './selectors';

const PathWrapper = props => (
  <div>{props.isNotStream ? <div>{props.children}</div> : <div />}</div>
);

PathWrapper.propTypes = {
  isNotStream: PropTypes.bool,
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  isNotStream: makeSelectIsNotStream(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withRouter,
  withConnect
)(PathWrapper);
