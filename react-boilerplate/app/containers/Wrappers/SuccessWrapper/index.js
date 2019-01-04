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

import { makeSelectSuccess } from './selectors';

require('./css.css');

const SuccessWrapper = props => (
  <Portal open={!!props.success.length} className="errorSegment">
    <Segment>
      <div>{props.success ? <div>{props.success}</div> : <div />}</div>
    </Segment>
  </Portal>
);

SuccessWrapper.propTypes = {
  success: PropTypes.string,
};

const mapStateToProps = () =>
  createStructuredSelector({
    success: makeSelectSuccess(),
  });

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'GlobalSuccess', reducer });
const withSaga = injectSaga({ key: 'GlobalSuccess', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SuccessWrapper);
