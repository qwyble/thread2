import React from 'react';
import PropTypes from 'prop-types';
import { Portal, Segment } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { compose } from 'redux';
import { connect } from 'react-redux';

import reducer from './reducer';
import saga from './saga';

import { makeSelectError } from './selectors';

require('./css.css');

const ErrorWrapper = props => (
  <Portal open={!!props.error.length} className="errorSegment">
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
    error: makeSelectError(),
  });

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'GlobalError', reducer });
const withSaga = injectSaga({ key: 'GlobalError', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ErrorWrapper);
