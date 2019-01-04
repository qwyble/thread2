import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectSelectedPlIsOwner } from 'containers/SideBar/SideBarContainer/selectors';

const IsPlaylistOwner = props => (
  <div>
    {props.isOwner ? (
      <div>{props.children}</div>
    ) : (
      <div>{props.alt ? <div>{props.alt}</div> : <div />}</div>
    )}
  </div>
);

IsPlaylistOwner.propTypes = {
  alt: PropTypes.element,
  isOwner: PropTypes.bool,
  children: PropTypes.element,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isOwner: makeSelectSelectedPlIsOwner(),
  });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(IsPlaylistOwner);
