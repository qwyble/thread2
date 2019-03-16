import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'semantic-ui-react';
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
  <Portal open={!!props.success.length} className="successSegment">
    <div className="ui segment padded">
      <div className="successMessageBlock">
          <div>{props.success ? <div>{props.success}</div> : <div />}</div>
      </div>
    </div>
  </Portal>
);

SuccessWrapper.propTypes = {
  success: PropTypes.string.isRequired,
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
