import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsOwner } from 'containers/AppUtilities/ProfileContext/selectors';

const IsSideBarOwner = props => (
  <span>
    {props.isOwner ? (
      <span>{props.children}</span>
    ) : (
      <span>{props.alt ? <span>{props.alt}</span> : <span />}</span>
    )}
  </span>
);

IsSideBarOwner.propTypes = {
  alt: PropTypes.element,
  isOwner: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isOwner: makeSelectIsOwner(),
  });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(IsSideBarOwner);
