import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectSelectedPlIsOwner } from 'containers/SideBar/SideBarContainer/selectors';

const IsNotPlaylistOwner = props => (
  <span>
    {props.isOwner ? (
      <span>{props.alt ? <span>{props.alt}</span> : <span />}</span>
    ) : (
      <span>{props.children}</span>
    )}
  </span>
);

IsNotPlaylistOwner.propTypes = {
  alt: PropTypes.element.isRequired,
  isOwner: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isOwner: makeSelectSelectedPlIsOwner(),
  });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(IsNotPlaylistOwner);
