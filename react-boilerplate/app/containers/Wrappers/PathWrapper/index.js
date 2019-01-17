import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsNotStream } from './selectors';

const PathWrapper = props => (
  <span style={{ display: 'inline-block', fontSize: '1em' }}>
    {props.isNotStream ? <span>{props.children}</span> : <div />}
  </span>
);

PathWrapper.propTypes = {
  isNotStream: PropTypes.bool,
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  isNotStream: makeSelectIsNotStream(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(PathWrapper);
