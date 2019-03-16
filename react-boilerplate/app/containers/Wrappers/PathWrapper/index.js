import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsNotStream, makeSelectIsNotProfile } from './selectors';

const PathWrapper = props => (
  <span style={{ display: 'inline-block', fontSize: '1em' }}>
    {props.isNotStream && props.isNotProfile ? (
      <span>{props.children}</span>
    ) : (
      <span />
    )}
  </span>
);

PathWrapper.propTypes = {
  isNotStream: PropTypes.bool,
  isNotProfile: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isNotStream: makeSelectIsNotStream(),
  isNotProfile: makeSelectIsNotProfile(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(PathWrapper);
