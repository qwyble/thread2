import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsThreadOwner } from './selectors';

const IsOwner = props => (
  <span>
    {props.isOwner ? (
      <span>{props.children}</span>
    ) : (
      <span>{props.alt ? <span>{props.alt}</span> : <span />}</span>
    )}
  </span>
);

IsOwner.propTypes = {
  alt: PropTypes.element.isRequired,
  isOwner: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isOwner: makeSelectIsThreadOwner(),
  });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(IsOwner);
