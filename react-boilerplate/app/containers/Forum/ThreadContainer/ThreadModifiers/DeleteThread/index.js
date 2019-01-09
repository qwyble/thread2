import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import SuccessPortal from 'components/common/SuccessPortal';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsLoading, makeSelectDidSucceed } from './selectors';
import { deleteThread } from './actions';

const DeleteThread = props => (
  <div>
    <LoaderWrapper isLoading={props.isLoading}>
      Are you sure?
      <Button onClick={props.deleteThread}>yes</Button>
      <Button onClick={props.onCloseModal}>no</Button>
      <SuccessPortal didSucceed={props.didSucceed} to="/forum">
        Thread deleted.
      </SuccessPortal>
    </LoaderWrapper>
  </div>
);

DeleteThread.propTypes = {
  deleteThread: PropTypes.func,
  isLoading: PropTypes.bool,
  didSucceed: PropTypes.bool,
  onCloseModal: PropTypes.func,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    didSucceed: makeSelectDidSucceed(),
  });

const mapDispatchToProps = {
  deleteThread,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'DeleteThread', reducer });
const withSaga = injectSaga({ key: 'DeleteThread', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(DeleteThread);
