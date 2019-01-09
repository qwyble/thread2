import React from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import AddCommentForm from 'components/Forum/Thread/AddCommentForm';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsLoading, makeSelectDidSucceed } from './selectors';
import { submitComment } from './actions';

const AddCommentContainer = props => {
  if (props.didSucceed) props.onCloseModal();
  return (
    <AddCommentForm
      onCloseModal={props.onCloseModal}
      isLoading={props.isLoading}
      onSubmit={props.submitComment}
    />
  );
};

AddCommentContainer.propTypes = {
  onCloseModal: PropTypes.func,
  isLoading: PropTypes.bool,
  submitComment: PropTypes.func,
  didSucceed: PropTypes.bool,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    didSucceed: makeSelectDidSucceed(),
  });

const mapDispatchToProps = {
  submitComment,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'AddCommentContainer', reducer });
const withSaga = injectSaga({ key: 'AddCommentContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(AddCommentContainer);
