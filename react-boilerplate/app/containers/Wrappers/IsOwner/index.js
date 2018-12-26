import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsOwner } from '../../../appUtilities/ProfileContext/selectors';

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
  children: PropTypes.element,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isOwner: () => makeSelectIsOwner(),
  });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(IsOwner);
