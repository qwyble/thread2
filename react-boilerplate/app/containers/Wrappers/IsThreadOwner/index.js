import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsThreadOwner } from './selectors';

const IsOwner = props => (
  <div>
    {props.isOwner ? (
      <div>{props.children}</div>
    ) : (
      <div>{props.alt ? <div>{props.alt}</div> : <div />}</div>
    )}
  </div>
);

IsOwner.propTypes = {
  alt: PropTypes.element,
  isOwner: PropTypes.bool,
  children: PropTypes.node,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isOwner: makeSelectIsThreadOwner(),
  });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(IsOwner);
