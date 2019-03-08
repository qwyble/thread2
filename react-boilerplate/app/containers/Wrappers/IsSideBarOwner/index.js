import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsOwner } from 'containers/AppUtilities/ProfileContext/selectors';

const IsSideBarOwner = props => (
  <div>
    {props.isOwner ? (
      <div style={{ height: '100%' }}>{props.children}</div>
    ) : (
      <div>{props.alt ? <div>{props.alt}</div> : <div />}</div>
    )}
  </div>
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
