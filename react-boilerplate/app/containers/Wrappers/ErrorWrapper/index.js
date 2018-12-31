import React from 'react';
import PropTypes from 'prop-types';
import { Portal, Segment } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makeSelectError } from './selectors';

const ErrorWrapper = props => (
  <Portal open={props.error.length}>
    <Segment>
      <div>{props.error ? <div>{props.error}</div> : <div />}</div>
    </Segment>
  </Portal>
);

ErrorWrapper.propTypes = {
  error: PropTypes.string,
};

const mapStateToProps = () =>
  createStructuredSelector({
    error: () => makeSelectError(),
  });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(ErrorWrapper);
