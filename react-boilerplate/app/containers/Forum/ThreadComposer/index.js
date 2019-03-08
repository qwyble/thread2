import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { makeSelectCategories } from 'containers/Forum/ForumCategories/selectors';
import ThreadComposerForm from 'components/Forum/ThreadComposerForm';

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsLoading, makeSelectDidSucceed } from './selectors';

import { postThread } from './actions';

const ThreadComposer = props => {
  if (props.didSucceed) {
    return <Redirect to="/forum" />;
  }
  return (
    <div>
      <ThreadComposerForm
        onPostThread={props.postThread}
        isLoading={props.isLoading}
        categories={props.categories}
      />
    </div>
  );
};

ThreadComposer.propTypes = {
  categories: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  postThread: PropTypes.func.isRequired,
  didSucceed: PropTypes.bool.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    categories: makeSelectCategories(),
    didSucceed: makeSelectDidSucceed(),
  });

const mapDispatchToProps = {
  postThread,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'ThreadComposer', reducer });
const withSaga = injectSaga({ key: 'ThreadComposer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ThreadComposer);
