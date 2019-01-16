import React from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { makeSelectSelectedCategory } from 'containers/Forum/ForumCategories/selectors';

import ThreadsTable from 'components/Forum/ThreadsTable';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsLoading, makeSelectThreads } from './selectors';

import { getThreads } from './actions';

class ThreadsContainer extends React.Component {
  componentDidMount() {
    this.props.getThreads();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      this.props.getThreads();
    }
  }

  render() {
    return (
      <div>
        <LoaderWrapper isLoading={this.props.isLoading} dimmer>
          <ThreadsTable threads={this.props.threads} />
        </LoaderWrapper>
      </div>
    );
  }
}

ThreadsContainer.propTypes = {
  isLoading: PropTypes.bool,
  threads: PropTypes.object,
  selectedCategory: PropTypes.number,
  getThreads: PropTypes.func,
};

const mapStateToProps = () =>
  createStructuredSelector({
    threads: makeSelectThreads(),
    isLoading: makeSelectIsLoading(),
    selectedCategory: makeSelectSelectedCategory(),
  });

const mapDispatchToProps = {
  getThreads,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'ThreadsContainer', reducer });
const withSaga = injectSaga({ key: 'ThreadsContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ThreadsContainer);
