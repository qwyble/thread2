import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsThreadOwner } from './selectors';

const IsThreadOwner = props => (
  <span>
    {props.isThreadOwner ? (
      <span>{props.children}</span>
    ) : (
      <span>{props.alt ? <span>{props.alt}</span> : <span />}</span>
    )}
  </span>
);

IsThreadOwner.propTypes = {
  alt: PropTypes.element,
  isThreadOwner: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isThreadOwner: makeSelectIsThreadOwner(),
  });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(IsThreadOwner);
