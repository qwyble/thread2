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
import { submitComment, initState } from './actions';

class AddCommentContainer extends React.Component {
  componentDidUpdate() {
    if (this.props.didSucceed) {
      this.props.initState();
      this.props.onClose();
    }
  }

  render() {
    return (
      <AddCommentForm
        onCloseModal={this.props.onClose}
        isLoading={this.props.isLoading}
        onSubmit={this.props.submitComment}
      />
    );
  }
}

AddCommentContainer.propTypes = {
  onClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  submitComment: PropTypes.func.isRequired,
  didSucceed: PropTypes.bool,
  initState: PropTypes.func.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    didSucceed: makeSelectDidSucceed(),
  });

const mapDispatchToProps = {
  submitComment,
  initState,
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
