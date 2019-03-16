import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { makeSelectIsLoading } from 'containers/SideBar/CategoryContainer/selectors';

const PlaylistLoadingWrapper = props => (
  <LoaderWrapper isLoading={props.isLoading}>{props.children}</LoaderWrapper>
);

PlaylistLoadingWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
  });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(PlaylistLoadingWrapper);
