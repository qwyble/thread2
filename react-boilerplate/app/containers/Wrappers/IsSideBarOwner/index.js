import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsOwner } from 'containers/AppUtilities/ProfileContext/selectors';

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
  alt: PropTypes.element,
  isOwner: PropTypes.bool,
  children: PropTypes.node,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isOwner: makeSelectIsOwner(),
  });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(IsOwner);
