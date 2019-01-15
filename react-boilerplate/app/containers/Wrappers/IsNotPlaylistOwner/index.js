import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectSelectedPlIsOwner } from 'containers/SideBar/SideBarContainer/selectors';

const IsNotPlaylistOwner = props => (
  <div>
    {props.isOwner ? (
      <div>{props.alt ? <div>{props.alt}</div> : <div />}</div>
    ) : (
      <div>{props.children}</div>
    )}
  </div>
);

IsNotPlaylistOwner.propTypes = {
  alt: PropTypes.element,
  isOwner: PropTypes.bool,
  children: PropTypes.node,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isOwner: makeSelectSelectedPlIsOwner(),
  });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(IsNotPlaylistOwner);
