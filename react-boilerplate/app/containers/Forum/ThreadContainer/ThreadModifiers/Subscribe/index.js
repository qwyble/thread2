import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import { makeSelectThreadId } from 'containers/Forum/ThreadContainer/ThreadContainer/selectors';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsLoading, makeSelectIsSubscribed } from './selectors';
import { getSubscribed, subscribe } from './actions';

class Subscribe extends React.Component {
  componentDidMount() {
    this.props.getSubscribed();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.threadId !== this.props.threadId) this.props.getSubscribed();
  }

  render() {
    return (
      <span>
        <button className="ui button small" onClick={this.props.subscribe}>
          <LoaderWrapper isLoading={this.props.isLoading} size="mini">
            {this.props.subscribed ? 'Unsubscribe' : 'Subscribe'}
          </LoaderWrapper>
        </button>
      </span>
    );
  }
}

Subscribe.propTypes = {
  subscribe: PropTypes.func.isRequired,
  getSubscribed: PropTypes.func.isRequired,
  threadId: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  subscribed: PropTypes.bool.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    threadId: makeSelectThreadId(),
    isLoading: makeSelectIsLoading(),
    subscribed: makeSelectIsSubscribed(),
  });

const mapDispatchToProps = {
  subscribe,
  getSubscribed,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'SubscribeContainer', reducer });
const withSaga = injectSaga({ key: 'SubscribeContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Subscribe);
