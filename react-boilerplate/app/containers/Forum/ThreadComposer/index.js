import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';

import { makeSelectCategories } from 'containers/Forum/ForumCategories/selectors';
import { makeSelectIsLoading, makeSelectDidSucceed } from './selectors';

import { postThread } from './actions';

class ThreadComposer extends Component {
  render() {
    if (this.props.didSucceed) {
      return (
        <Redirect to='/forum' />
      )
    }
    return (
      <div>
        <ThreadComposerForm
          onPostThread={this.props.postThread}
          isLoading={this.props.isLoading}
          categories={this.props.categories}
        />
      </div>
    );
  }
}

ThreadComposer.propTypes = {
  categories: PropTypes.array,
  isLoading: PropTypes.bool,
  postThread: PropTypes.func,
};

const mapStateToProps = () = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  categories: makeSelectCategories(),
  didSucceed: makeSelectDidSucceed(),
});

const mapDispatchToProps = {
  postThread,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'ThreadComposer', reducer });
const withSaga = injectSaga({ key: 'ThreadComposer', saga });

export default compose(withReducer, withSaga, withConnect)(ThreadComposer);
