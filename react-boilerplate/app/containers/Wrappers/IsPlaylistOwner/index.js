import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectSelectedPlIsOwner } from 'containers/SideBar/SideBarContainer/selectors';

const IsPlaylistOwner = props => (
  <span>
    {props.isOwner ? (
      <span>{props.children}</span>
    ) : (
      <span>{props.alt ? <span>{props.alt}</span> : <span />}</span>
    )}
  </span>
);

IsPlaylistOwner.propTypes = {
  alt: PropTypes.element,
  isOwner: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isOwner: makeSelectSelectedPlIsOwner(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(IsPlaylistOwner);
